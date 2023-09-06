import PropTypes from 'prop-types';
import { Component } from 'react';
import UserListItem from './UserListItem';

export default class UserList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <UserListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}
