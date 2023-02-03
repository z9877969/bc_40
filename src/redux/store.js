import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import countReducer from "./count/countReducer";
// import todoReducer from "./todo/todoReducer";
import countReducer from "./count/countSlice";
import todoReducer from "./todo/todoSlice";
// import { todo } from "../data/todo";

// const rootReducer = combineReducers({
//   count: countReducer,
//   todo: todoReducer,
// });

const persistTodoConfig = {
  key: "todo",
  version: 1,
  storage: storage,
  // whitelist: ["items"],
  blacklist: ["filter"],
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

export const store = configureStore({
  // reducer: rootReducer
  reducer: {
    count: countReducer,
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: {
  //   count: 50,
  //   todo: {
  //     items: todo,
  //     filter: "medium",
  //   },
  // },
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
