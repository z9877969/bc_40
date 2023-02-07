import { useSelector } from "react-redux";
import { selectorFilteredTodo } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
  const filteredTodo = useSelector(selectorFilteredTodo);
  // ref1 | ref2 | ref3

  console.log("render_TodoList");

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
