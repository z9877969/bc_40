import { useDispatch, useSelector } from "react-redux";
import { selectorIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";
import { ActiveNavLink, NavContainer } from "./Navigation.styled";

const Navigation = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectorIsAuth);

  return (
    <NavContainer>
      <ul>
        <li>
          <ActiveNavLink to="/">Home</ActiveNavLink>
        </li>
        {isAuth ? (
          <>
            <li>
              <ActiveNavLink to="/counter">Counter</ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink to="/todo">Todo</ActiveNavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <ActiveNavLink to="/login">Login</ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink to="/register">Register</ActiveNavLink>
            </li>
          </>
        )}
      </ul>
      {isAuth && (
        <button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </button>
      )}
    </NavContainer>
  );
};

export default Navigation;
