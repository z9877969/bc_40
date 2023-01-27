import { useState, useMemo, useCallback } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = ({ theme }) => {
  const [todo, setTodo] = useLocalStorage("todo", []);
  const [filter, setFilter] = useState("all");

  const addTodo = useCallback(
    // ref1 | ref1 | ref1 ...
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
    console.log("useMemo_Todo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [todo, filter]);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "blue" : "yellow",
      }}
    >
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect value={filter} onChange={changeFilter} />
      <ToDoList todo={filteredTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoPage;

// HOC
