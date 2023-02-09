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

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectorIsAuth); // false

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        {isAuth ? (
          <>
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="*" element={<Navigate to={"/counter"} />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;

// {
//   users: {
//     user1: {
//       todo: {
//         eiwuyiuyiuyi: {
//           title: "",
//           date: "",
//           priority: ""
//         }
//       }
//     }
//   }
// }
