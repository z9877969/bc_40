import { createSelector } from "@reduxjs/toolkit";

export const selectorTodoFilter = (state) => state.todo.filter;
export const selectorTodoItems = (state) => state.todo.items;

export const selectorFilteredTodo = createSelector(
  [selectorTodoFilter, selectorTodoItems],
  (filter, items) => {
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);
