import PropTypes from "prop-types";
import { useContext } from "react";
import { IsModalOpenContext } from "../..";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = ({ todo, removeTodo }) => {
  const { isModalOpen } = useContext(IsModalOpenContext);

  return (
    <>
      {isModalOpen && <h1>Modal</h1>}
      <ul className={s.container}>
        {todo.map((item) => (
          <TodoItem key={item.id} {...item} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
