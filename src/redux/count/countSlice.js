import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";

const countSlice = createSlice({
  name: "count",
  initialState: 80,
  reducers: {
    increment(state, { payload }) {
      return state + payload;
    },
    decrement(state, { payload }) {
      return state - payload;
    },
    reset() {
      return 80;
    },
  },
  extraReducers: (b) => {
    b.addCase(logOut, (state) => 80);
  },
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;
