import { createReducer } from "@reduxjs/toolkit";
import {
  countDecrementAction,
  countIncrementAction,
  countResetAction,
} from "./countActions";
// import { COUNT_INCREMENT, COUNT_RESET } from "./countConstants";

// const countReducer = (state = 50, action) => {
//   switch (action.type) {
//     case COUNT_DECREMENT:
//       return state - action.payload;
//     case COUNT_INCREMENT:
//       return state + action.payload;
//     case COUNT_RESET:
//       return 50;
//     default:
//       return state;
//   }
// };

const countReducer = createReducer(50, (builder) => {
  builder
    .addCase(countDecrementAction, (state, { payload }) => state - payload)
    .addCase(countIncrementAction, (state, { payload }) => state + payload)
    .addCase(countResetAction, () => 50);
});

export default countReducer;
