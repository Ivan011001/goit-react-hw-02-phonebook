import { Component } from 'react';

export default class UserForm extends Component {
  render() {
    const { onSubmit, onChange, newName, newNumber } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(['\s\-a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={newName}
            onChange={onChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="/^\+?\d{0,4}[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={newNumber}
            onChange={onChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
