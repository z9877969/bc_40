import axios from "axios";

axios.defaults.baseURL = "https://bc-40-414ee-default-rtdb.firebaseio.com";

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
