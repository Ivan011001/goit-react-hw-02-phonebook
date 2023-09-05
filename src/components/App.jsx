import { nanoid } from 'nanoid';
import { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onHandleChange = evt => {
    const { value } = evt.target;
    this.setState({ name: value });
  };

  onHandleSubmit = evt => {
    const { contacts, name } = this.state;
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [{ name, id: nanoid() }, ...prevState.contacts],
      name: '',
    }));
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <UserForm
          onSubmit={this.onHandleSubmit}
          onChange={this.onHandleChange}
          newName={name}
        />
        <UserList contacts={contacts} />
      </div>
    );
  }
}
