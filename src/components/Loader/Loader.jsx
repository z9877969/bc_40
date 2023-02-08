import { useSelector } from "react-redux";
import { useCustomSelector } from "../../context/ReactReduxContext";

const Loader = ({ selectorIsLoading }) => {
  const isLoading = useCustomSelector(selectorIsLoading);

  return isLoading ? <h2>Loading...</h2> : null;
};

export default Loader;
