import { useSelector } from "react-redux";
import { selectorIsAuth } from "../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectorIsAuth);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  const shouldRedirectToPublicRoute = !isAuth && !isRefreshing;
  

  return { isAuth, isRefreshing, shouldRedirectToPublicRoute };
};
