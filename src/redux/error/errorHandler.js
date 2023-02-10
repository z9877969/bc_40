import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, cb }) =>
  (dispatch) => {
    if (error.response?.status === 400 || error.response?.status === 401) {
      dispatch(refreshToken(cb));
    }
  };
