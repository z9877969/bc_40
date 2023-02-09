import axios from "axios";

axios.defaults.baseURL = "https://bc-40-414ee-default-rtdb.firebaseio.com";

const API_KEY = "AIzaSyDz0LKqNwioMP8Fe8hlPj-LfAdTtazYiGY";

const baseUrl = {
  DB: "https://bc-40-414ee-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

const setToken = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const addTodoApi = (todo) => {
  return axios
    .post("/todo.json", todo)
    .then((res) => res.data)
    .then((data) => ({ ...todo, id: data.name }));
};

export const getTodoApi = () => {
  return axios.get("/todo.json").then(({ data }) => {
    return Object.entries(data).map(([id, data]) => ({ ...data, id }));
  });
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then(() => {
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
  setBaseUrl(baseUrl.AUTH);
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
