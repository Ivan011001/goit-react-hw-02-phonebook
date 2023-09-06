import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  return <input type="text" name="filter" value={filter} onChange={onChange} />;
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
