import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (todo, { rejectWithValue }) => {
    try {
      const data = await addTodoApi(todo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTodoApi();
      return data;
    } catch (error) {
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
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
