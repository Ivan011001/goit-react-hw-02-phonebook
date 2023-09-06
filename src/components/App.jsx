import { nanoid } from 'nanoid';
import { Component } from 'react';
import Section from './Section';
import UserForm from './UserForm';
import UserList from './UserList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onHandleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="Phonebook">
          <UserForm
            onSubmit={this.onHandleSubmit}
            onChange={this.onHandleChange}
            newName={name}
            newNumber={number}
          />
        </Section>
        <Section title="Contacts">
          <UserList
            contacts={filteredContacts}
            filter={filter}
            onChange={this.onHandleChange}
          />
        </Section>
      </div>
    );
  }
}
