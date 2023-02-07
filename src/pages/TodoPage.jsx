import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";
import Loader from "../components/Loader/Loader";
import { toggle } from "../redux/todo/todoSlice";

const TodoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  console.log("render_Page");

  return (
    <>
      <ToDoForm />
      <button onClick={() => dispatch(toggle())}>Toggle</button>
      <PrioritySelect />
      <Loader />
      <ToDoList />
    </>
  );
};

export default TodoPage;
