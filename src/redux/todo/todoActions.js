import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addTodo = createAction("todo/add", (form) => {
  return {
    payload: { ...form, id: uuidv4() },
  };
});
export const removeTodo = createAction("todo/remove");
export const changeFilter = createAction("todo/change/filter");
