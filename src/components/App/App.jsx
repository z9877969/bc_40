import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import TodoPage from "../../pages/TodoPage";
import CounterPage from "../../pages/CounterPage";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAuth } from "../../redux/auth/authSelectors";
import RegisterPage from "../../pages/ReagisterPage";
import LoginPage from "../../pages/LoginPage";
import { useEffect } from "react";
import { getCurUser } from "../../redux/auth/authOperations";
import { useAuth } from "../../hooks/useAuth";
import { resetIsRefreshing } from "../../redux/auth/authSlice";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const { shouldRedirectToPublicRoute } = useAuth();

  return shouldRedirectToPublicRoute ? <Navigate to={redirectTo} /> : component;
};

const PublicRoute = ({ redirectTo = "/counter", component }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // const isAuth = useSelector(selectorIsAuth); // false

  useEffect(() => {
    dispatch(getCurUser()); // -> localId
  }, [dispatch]);

  useEffect(() => {
    if (pathname === "/login" || pathname === "/register") {
      dispatch(resetIsRefreshing());
    }
  }, []);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route
          path="/counter"
          element={<PrivateRoute redirectTo="/" component={<CounterPage />} />}
        />
        <Route
          path="/todo"
          element={<PrivateRoute component={<TodoPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
