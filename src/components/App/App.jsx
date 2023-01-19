import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";

const App = () => {
  return (
    <>
      <TodoForm />
      <TodoList todo={todo} />
    </>
  );
};

export default App;
