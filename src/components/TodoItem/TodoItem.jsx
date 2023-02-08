import { useDispatch } from "react-redux";
import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { removeTodo } from "../../redux/todo/todoOperations";
import { useCustomDispatch } from "../../context/ReactReduxContext";

const TodoItem = ({ title, id, date, priority }) => {
  const dispatch = useCustomDispatch();

  return (
    <li key={id} className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
      <p className={`${s.descr} ${true && s.isDone}`}>PRIORITY - {priority}</p>
      <label className={s.status}>
        <input type="checkbox" name="status" />
        Done
      </label>
      <button
        className={s.todoBtn}
        onClick={() => {
          dispatch(removeTodo(id));
        }}
      >
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
