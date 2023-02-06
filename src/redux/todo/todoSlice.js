import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addRequest(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    addSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    addError(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    getRequest(state) {
      state.isLoading = true;
    },
    getSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    removeRequest(state) {
      state.isLoading = true;
    },
    removeSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    removeError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    changeFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const {
  addRequest,
  addSuccess,
  addError,
  getRequest,
  getSuccess,
  getError,
  removeRequest,
  removeSuccess,
  removeError,
  changeFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
