import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import { getTodo } from "../redux/todo/todoOperations";
import Loader from "../components/Loader/Loader";
import { toggle } from "../redux/todo/todoSlice";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../context/ReactReduxContext";
import { selectorTodoIsLoading } from "../redux/todo/todoSelectors";

const TodoPage = () => {
  const dispatch = useCustomDispatch();

  // const isLoading = useCustomSelector((state) => state.todo.isLoading);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <>
      <ToDoForm />
      <button onClick={() => dispatch(toggle())}>Toggle</button>
      <PrioritySelect />
      <Loader selectorIsLoading={selectorTodoIsLoading} />
      {/* {isLoading && <h2>Loading...</h2>} */}
      <ToDoList />
    </>
  );
};

export default TodoPage;
