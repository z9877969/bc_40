import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import countReducer from "./count/countReducer";
import todoReducer from './todo/todoReducer';

// const rootReducer = (
//   state = { a: { item: { a: 21, b: "str" } }, b: true, c: [] },
//   action
// ) => {
//   return state; // {...state, a: {item: {...state.item, b: "qwe"}}}
// };

const action = { type: "changeB" };

const aReducer = (state = { item: { a: 21, b: "str" } }, action) => {
  // { type: "changeB" }
  return state;
};

const bReducer = (state = true, action) => {
  // { type: "changeB" } | { type: "changeC" }
  if (action.type === "changeB") {
    return false;
  }
  return state;
};

const cReducer = (state = [], action) => {
  return state;
};

const usdReducer = (state = null, action) => {
  return state;
};

const eurReducer = (state = null, action) => {
  return state;
};

const currencyReducer = combineReducers({
  usd: usdReducer,
  eur: eurReducer,
});

const rootReducer = combineReducers({
  a: aReducer,
  b: bReducer,
  c: cReducer,
  count: countReducer,
  todo: todoReducer, // {items, filter}
  currency: currencyReducer,
}); // (state = {a: { item: { a: 21, b: "str" } }, b: false, c: []}, action) => {}

export const store = createStore(rootReducer, composeWithDevTools());
