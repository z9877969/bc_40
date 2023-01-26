import PropTypes from "prop-types";
import s from "./PrioritySelect.module.scss";


const PrioritySelect = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <label className={s.title} htmlFor="priority-filter">
        Priority filter
      </label>
      <select
        className={s.select}
        name="priority"
        value={value}
        onChange={onChange}
        id="priority-filter"
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

PrioritySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrioritySelect;
