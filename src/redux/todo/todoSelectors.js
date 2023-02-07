import { createSelector } from "@reduxjs/toolkit";

export const selectorTodoFilter = (state) => state.todo.filter;
export const selectorTodoItems = (state) => state.todo.items;

// export const selectorFilteredTodo = (state) => {
//
//   console.log("selectorFilterTodo");
//   const filter = selectorTodoFilter(state);
//   const items = selectorTodoItems(state);

//   if (filter === "all") return items; // filter = medium
//   return items.filter((el) => el.priority === filter); // ref1 | ref1 | ref1
// };

export const selectorFilteredTodo = createSelector(
  [selectorTodoFilter, selectorTodoItems],
  (filter, items) => {
    console.log("selectorFilterTodo");
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);
