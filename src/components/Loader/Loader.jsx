import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.todo.isLoading);

  return isLoading ? <h2>Loading...</h2> : null;
};

export default Loader;
