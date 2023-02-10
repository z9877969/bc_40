import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import TodoPage from "../../pages/TodoPage";
import CounterPage from "../../pages/CounterPage";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAuth } from "../../redux/auth/authSelectors";
import RegisterPage from "../../pages/ReagisterPage";
import LoginPage from "../../pages/LoginPage";
import { useEffect } from "react";
import { getCurUser } from "../../redux/auth/authOperations";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ redirectTo = "/counter", component }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const ErrorContainer = () => {
  const error = useSelector((state) => state.auth.error || state.todo.error);

  useEffect(() => {
    error && alert(error);
  }, [error]);

  return null;
};

const App = () => {
  const dispatch = useDispatch();

  // const isAuth = useSelector(selectorIsAuth); // false

  useEffect(() => {
    dispatch(getCurUser()); // -> localId
  }, [dispatch]);

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
      <ErrorContainer />
    </>
  );
};

export default App;
