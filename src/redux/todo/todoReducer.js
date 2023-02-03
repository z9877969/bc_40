import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";
import { addTodo, changeFilter, removeTodo } from "./todoActions";

const setTodoToLS = (todo) =>
  localStorage.setItem("todo", JSON.stringify(todo));

const getTodoFromLS = () => JSON.parse(localStorage.getItem("todo")) ?? todo;

const itemsReducer = createReducer(getTodoFromLS(), (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => [...state, payload])
    .addCase(removeTodo, (state, { payload }) =>
      state.filter((todo) => todo.id !== payload)
    )
    // .addMatcher(null, (state, { payload }) => state);
});

const filterReducer = createReducer("all", (builder) => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;

// const loaderReducer = createReducer(false, (builder) => {
//   builder
//     .addCase("custom/name/pending", () => true)
//     .addCase("custom/name2/pending", () => true)
//     .addCase("custom/name3/pending", () => true)
//     .addMatcher(
//       (action) => action.type.endsWith("/pending"),
//       () => true
//     )
//     .addMatcher(
//       (action) =>
//         action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
//       () => false
//     )
//     .addDefaultCase((state, { payload }) => state);
// });

// custom/name/pending
// custom/name/fulfilled
// custom/name/rejected

// custom/name2/pending
// custom/name2/fulfilled
// custom/name2/rejected

// custom/name3/pending
// custom/name3/fulfilled
// custom/name3/rejected
