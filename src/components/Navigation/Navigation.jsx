import { ActiveNavLink, NavContainer } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <ActiveNavLink to="/counter">Counter</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/todo">Todo</ActiveNavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navigation;
