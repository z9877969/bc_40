import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  registerUserApi,
} from "../../utils/firebaseApi";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, { getState, rejectWithValue }) => {
    const { idToken } = getState().auth;
    try {
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      console.log(idToken);
      return Boolean(idToken);
    },
  }
);
