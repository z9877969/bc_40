import { createSelector } from "@reduxjs/toolkit";

export const selectorTodoFilter = (state) => state.todo.filter;
export const selectorTodoItems = (state) => state.todo.items;
export const selectorTodoIsLoading = (state) => state.todo.isLoading;

export const selectorIsTodoExist = (state) =>
  Boolean(selectorTodoItems(state).length);

export const selectorFilteredTodo = createSelector(
  [selectorTodoFilter, selectorTodoItems],
  (filter, items) => {
    // console.log("selectorFilterTodo");
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);
