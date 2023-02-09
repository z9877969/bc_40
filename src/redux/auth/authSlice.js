import { createSlice } from "@reduxjs/toolkit";
import { getCurUser, loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    email: null,
    idToken: null,
    localId: null,
    refreshToken: null,
    isLoading: false,
    error: null,
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
          ...payload,
        };
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
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

export default authSlice.reducer;
