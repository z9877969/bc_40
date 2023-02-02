import { COUNT_DECREMENT, COUNT_INCREMENT, COUNT_RESET } from "./countConstants";

const countReducer = (state = 50, action) => {
  switch (action.type) {
    case COUNT_DECREMENT:
      return state - action.payload;
    case COUNT_INCREMENT:
      return state + action.payload;
    case COUNT_RESET:
      return 50;
    default:
      return state;
  }
};

export default countReducer;
