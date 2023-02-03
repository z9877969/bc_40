import { createAction } from "@reduxjs/toolkit";
// import { COUNT_INCREMENT, COUNT_RESET } from "./countConstants";

// export const countDecrementAction = (value) => ({
//   type: COUNT_DECREMENT,
//   payload: value,
// });
export const countDecrementAction = createAction("count/decrement");

// console.log(countDecrementAction(54));

// export const countIncrementAction = (value) => ({
//   type: COUNT_INCREMENT,
//   payload: value,
// });

export const countIncrementAction = createAction("count/increment");

// export const countResetAction = () => ({
//   type: COUNT_RESET,
// });

export const countResetAction = createAction("count/reset");
