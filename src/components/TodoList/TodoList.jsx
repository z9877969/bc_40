import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const selectorFilteredTodo = (state) => {
  const { filter, items } = state.todo;
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const TodoList = () => {
  const filteredTodo = useSelector(selectorFilteredTodo);

  return (
    <>
      <ul className={s.container}>
        {filteredTodo.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
