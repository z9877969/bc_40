import { TODO_ADD, TODO_CHANGE_FILTER, TODO_REMOVE } from "./todoConstants";

export const addTodo = (todo) => ({
  type: TODO_ADD,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: TODO_CHANGE_FILTER,
  payload: value,
});
