import { nanoid } from 'nanoid';
import { Component } from 'react';
import Section from './Section';
import UserForm from './UserForm';
import Filter from './Filter';
import UserList from './UserList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const isUserExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isUserExists) return alert(`${name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
    }));
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <div>
        <Section title="Phonebook">
          <UserForm onSubmit={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length !== 0 ? (
            <>
              <Filter filter={filter} onChange={this.onFilterChange} />
              <UserList
                contacts={filteredContacts}
                onDelete={this.onContactDelete}
              />
            </>
          ) : (
            <p>No info</p>
          )}
        </Section>
      </div>
    );
  }
}
