import { Component } from 'react';

export default class UserForm extends Component {
  render() {
    const { onSubmit, onChange, newName } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(['\s\-a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={newName}
            onChange={onChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
