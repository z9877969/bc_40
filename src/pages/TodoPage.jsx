import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";

const TodoPage = () => {
  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
