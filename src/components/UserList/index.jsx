import { Component } from 'react';

export default class UserList extends Component {
  render() {
    const { contacts, filter, onChange } = this.props;
    return (
      <>
        <input type="text" name="filter" value={filter} onChange={onChange} />
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
