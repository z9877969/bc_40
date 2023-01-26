import { useState, useEffect, useRef } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import { todo } from "../../data/todo";

const TodoPage = ({ theme }) => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterTodo = () => {
    console.log("Filter");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo(); // todo | filter

  // const isFirstRenderRef = useRef(true); // 1-render -> true; 2-render -> false

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   if (!isFirstRenderRef.current) {
  //     localStorage.setItem("todo", JSON.stringify(todo)); // LS -> todo: []
  //   }
  // }, [todo]);

  // useEffect(() => {
  //   console.log("useEffect one time");
  //   isFirstRenderRef.current = false;
  //   const todo = JSON.parse(localStorage.getItem("todo")) ?? [];
  //   setTodo(todo);
  // }, []);

  console.log("RENDER");

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

// {
//   // page -> fetch
//   // page === 1
//   // images.length = 12
//   useEffect(() => {
//     images.length === 12
//   }, [images])
// }
