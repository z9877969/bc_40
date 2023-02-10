import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (todo, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await addTodoApi({ todo, localId, idToken });
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addTodo(todo) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getTodoApi({ localId, idToken });
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getTodo }));
      }, 0);
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;
      return !items.length;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      await removeTodoApi({ id, localId, idToken });
      return id;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
