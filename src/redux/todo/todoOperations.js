// const operation = (body) => {
//     return function (dispatch) {
//       dispatch({ type: "request" });
//       fetch("url", body)
//         .then((data) => dispatch({ type: "success", payload: data }))
//         .catch((err) => dispatch({ type: "error", payload: err.message }));
//       // return undefined;
//     };
//   };

import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";
import {
  addError,
  addRequest,
  addSuccess,
  getError,
  getRequest,
  getSuccess,
  removeError,
  removeRequest,
  removeSuccess,
} from "./todoSlice";

export const addTodo = (todo) => (dispatch) => {
  dispatch(addRequest());

  addTodoApi(todo)
    .then((data) => dispatch(addSuccess(data)))
    .catch((err) => dispatch(addError(err.message)));
};
export const getTodo = () => (dispatch) => {
  dispatch(getRequest());

  getTodoApi()
    .then((todo) => dispatch(getSuccess(todo)))
    .catch((err) => dispatch(getError(err.message)));
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch(removeRequest());

  try {
    await removeTodoApi(id);
    dispatch(removeSuccess(id));
  } catch (error) {
    dispatch(removeError(error.message));
  }
};
