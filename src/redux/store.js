import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/countSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    todo: todoReducer,
  },
  middleware: (gDM) => [...gDM()],
  devTools: process.env.NODE_ENV === "development",
});
