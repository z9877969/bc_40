import { COUNT_DECREMENT, COUNT_INCREMENT, COUNT_RESET } from "./countConstants";

export const countDecrementAction = (value) => ({
  type: COUNT_DECREMENT,
  payload: value,
});

export const countIncrementAction = (value) => ({
  type: COUNT_INCREMENT,
  payload: value,
});

export const countResetAction = () => ({
  type: COUNT_RESET,
});
