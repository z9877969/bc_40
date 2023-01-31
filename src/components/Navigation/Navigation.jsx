// eslint-disable-next-line
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import s from "./Navigation.module.scss";

const ActiveNavLink = styled(NavLink)`
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

const Navigation = () => {
  const location = useLocation();

  console.log(location);

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <ActiveNavLink to="/">Home</ActiveNavLink>
        </li>
        <li className={s.navItem}>
          <ActiveNavLink to="/about">About</ActiveNavLink>
        </li>
        <li className={s.navItem}>
          <ActiveNavLink to="/country-news" state={location}>Country News</ActiveNavLink>
        </li>
        <li className={s.navItem}>
          <ActiveNavLink to="/search-news">Search News</ActiveNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// const NLink = ({ children, to, className }) => {
//   const isActive = location.pathname === to;

//   return (
//     <a
//       href={to}
//       className={
//         typeof className === "function" ? className({ isActive }) : className
//       }
//     >
//       {children}
//     </a>
//   );
// };
