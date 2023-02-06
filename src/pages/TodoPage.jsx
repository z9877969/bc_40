import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";
import Loader from "../components/Loader/Loader";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  console.log("render_Page");

  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <Loader />
      <ToDoList />
    </>
  );
};

export default TodoPage;
