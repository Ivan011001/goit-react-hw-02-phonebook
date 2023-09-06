export default function UserListItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
