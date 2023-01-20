import PropTypes from "prop-types";

const PrioritySelect = ({ value, onChange }) => {
  return (
    <select name="priority" value={value} onChange={onChange}>
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

PrioritySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrioritySelect;
