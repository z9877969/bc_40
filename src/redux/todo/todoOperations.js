import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk("todo/add", async (todo, thunkApi) => {
  try {
    const data = await addTodoApi(todo);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    try {
      const data = await getTodoApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;
      if (items.length) return false;
      return true;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeTodoApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
