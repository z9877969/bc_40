import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import Loader from "../components/Loader/Loader";
import { getTodo } from "../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isLocalId = useSelector((state) => Boolean(state.auth.localId));

  useEffect(() => {
    isLocalId && dispatch(getTodo());
  }, [dispatch, isLocalId]);

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
