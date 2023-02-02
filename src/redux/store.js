import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import countReducer from "./count/countReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
