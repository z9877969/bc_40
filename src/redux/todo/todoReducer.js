import { combineReducers } from "redux";
import { todo } from "../../data/todo";
import { TODO_ADD, TODO_CHANGE_FILTER, TODO_REMOVE } from "./todoConstants";

const setTodoToLS = (todo) =>
  localStorage.setItem("todo", JSON.stringify(todo));

const getTodoFromLS = () => JSON.parse(localStorage.getItem("todo")) ?? todo;

const itemsReducer = (state = getTodoFromLS(), action) => {
  switch (action.type) {
    case TODO_ADD:
      const addedTodo = [...state, action.payload];
      setTodoToLS(addedTodo);
      return addedTodo;
    case TODO_REMOVE:
      const removedTodo = state.filter((todo) => todo.id !== action.payload);
      setTodoToLS(removedTodo);
      return removedTodo;
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case TODO_CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
