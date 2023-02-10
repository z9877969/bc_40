import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";
import { addTodo, getTodo, removeTodo } from "./todoOperations";

const initialState = {
  items: [],
  filter: "all",
  isLoading: false,
  error: null,
  isOpen: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOut, () => ({ ...initialState }))
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("todo/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("todo/") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("todo/") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { changeFilter, toggle } = todoSlice.actions;
export default todoSlice.reducer;
