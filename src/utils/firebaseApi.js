import axios from "axios";

axios.defaults.baseURL = "https://bc-40-414ee-default-rtdb.firebaseio.com";

const API_KEY = "AIzaSyDz0LKqNwioMP8Fe8hlPj-LfAdTtazYiGY";

const baseUrl = {
  DB: "https://bc-40-414ee-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

// const setToken = (token) =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// https://bc-40-414ee-default-rtdb.firebaseio.com/users/localId/todo.json?auth=idToken"
export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, { params: { auth: idToken } })
    .then((res) => res.data)
    .then((data) => ({ ...todo, id: data.name }));
};

// addTodoApi({localId: "qtrqetewtrqw", todo: {}, idToken: "qwlkljrlkj"});

export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, { params: { auth: idToken } })
    .then(({ data }) => {
      return data
        ? Object.entries(data).map(([id, data]) => ({ ...data, id }))
        : [];
    });
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, { params: { auth: idToken } })
    .then(() => {
      return id;
    });
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export const registerUserApi = ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { email, idToken, localId, refreshToken } }) => ({
      email,
      idToken,
      localId,
      refreshToken,
    }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export const loginUserApi = (userData) => {
  setBaseUrl(baseUrl.AUTH); // baseUrl = AUTH
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        ...userData,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { email, idToken, localId, refreshToken } }) => ({
      email,
      idToken,
      localId,
      refreshToken,
    }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]'
export const getCurUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  // setToken(idToken);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};

// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      { params: { key: API_KEY } }
    )
    .then(({ data: { refresh_token, id_token } }) => ({
      idToken: id_token,
      refreshToken: refresh_token,
    }));
};
