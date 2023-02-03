import { createSlice } from "@reduxjs/toolkit";

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
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;

// countSlice -> reducer & actions / count/qwe | count/increment /
