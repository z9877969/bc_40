import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { todo } from "../../data/todo";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: todo,
    filter: "all",
  },
  reducers: {
    // add: {
    //   reducer(state, { payload }) {
    //     return {
    //       ...state,
    //       items: [...state.items, payload],
    //     };
    //   },
    //   prepare(form) {
    //     return {
    //       payload: { ...form, id: uuidv4() },
    //     };
    //   },
    // },
    add(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
    },
    changeFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { add, remove, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;
