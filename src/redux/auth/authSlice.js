import { createSlice } from "@reduxjs/toolkit";
import {
  getCurUser,
  loginUser,
  refreshToken,
  registerUser,
} from "./authOperations";

const initialState = {
  isAuth: false,
  isRefreshing: true,
  email: null,
  idToken: null,
  localId: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut() {
      return { ...initialState, isRefreshing: false };
    },
    resetIsRefreshing(state) {
      state.isRefreshing = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          ...payload,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isRefreshing: false,
          ...payload,
        };
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/pending"),
        (state, { type }) => {
          if (!type.includes("getCurUser")) {
            state.isRefreshing = false;
          }
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { logOut, resetIsRefreshing } = authSlice.actions;
export default authSlice.reducer;
