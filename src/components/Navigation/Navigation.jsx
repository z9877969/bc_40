import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/authSlice";
import { ActiveNavLink, NavContainer } from "./Navigation.styled";

const Navigation = () => {
  const dispatch = useDispatch();

  // const isAuth = useSelector(selectorIsAuth);
  const { shouldRedirectToPublicRoute } = useAuth();

  return (
    <NavContainer>
      <ul>
        <li>
          <ActiveNavLink to="/">Home</ActiveNavLink>
        </li>
        {!shouldRedirectToPublicRoute ? (
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
      {!shouldRedirectToPublicRoute && (
        <button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </button>
      )}
    </NavContainer>
  );
};

export default Navigation;
