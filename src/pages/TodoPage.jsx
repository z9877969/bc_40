import { useState, useMemo, useCallback } from "react";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoPage = () => {
  const [todo, setTodo] = useLocalStorage("todo", []);
  const [filter, setFilter] = useState("all");

  const addTodo = useCallback(
    (todo) => {
      setTodo((prevTodo) => [...prevTodo, todo]);
    },
    [setTodo]
  );

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    },
    [setTodo]
  );

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodo = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [todo, filter]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect value={filter} onChange={changeFilter} />
      <ToDoList todo={filteredTodo} removeTodo={removeTodo} />
    </>
  );
};

export default TodoPage;
