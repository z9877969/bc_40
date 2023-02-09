import { useDispatch, useSelector } from "react-redux";
import { selectorTodoFilter } from "../../redux/todo/todoSelectors";
import { changeFilter } from "../../redux/todo/todoSlice";
import s from "./PrioritySelect.module.scss";

const PrioritySelect = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorTodoFilter);

  return (
    <div className={s.container}>
      <label className={s.title} htmlFor="priority-filter">
        Priority filter
      </label>
      <select
        className={s.select}
        name="priority"
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
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

export default PrioritySelect;
