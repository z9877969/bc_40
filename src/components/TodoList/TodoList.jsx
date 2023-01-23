import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = ({ todo, removeTodo }) => {
  return (
    <ul className={s.container}>
      {todo.map((item) => (
        <TodoItem key={item.id} {...item} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
