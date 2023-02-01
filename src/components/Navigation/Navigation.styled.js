import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  margin: 0;
  padding: 15px;
  background-color: rgba(4, 53, 122, 0.9);

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }

  & li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ActiveNavLink = styled(NavLink)`
  font-size: 22px;
  padding: 10px 35px;
  border: 1px solid yellowgreen;
  color: yellowgreen;
  background-color: transparent;
  border-radius: 5px;
  text-decoration: none;
  &.active {
    background-color: #ffff0080;
    color: black;
  }
`;
