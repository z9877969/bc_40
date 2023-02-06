import { configureStore } from "@reduxjs/toolkit";
// import reduxLogger from "redux-logger";
import countReducer from "./count/countSlice";
import todoReducer from "./todo/todoSlice";

const customLogger = function (store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      const prevState = store.getState();

      console.log("prevState ", prevState);
      console.log("action ", action);
      next(action); // action -> reducer -> reducer change state

      const nextState = store.getState();
      console.log("nextState", nextState);
      console.groupEnd();
    };
  };
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

// middleware(store)(next)(action);

export const store = configureStore({
  reducer: {
    count: countReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      customLogger
      //  thunk
    ),
  devTools: process.env.NODE_ENV === "development",
});
