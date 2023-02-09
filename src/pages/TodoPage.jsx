import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import Loader from "../components/Loader/Loader";
import { getTodo } from "../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

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
