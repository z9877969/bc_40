import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";
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
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <ActiveNavLink to="/">Home</ActiveNavLink>
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
            // style={({ isActive }) => ({
            //   background: isActive ? "red" : "green",
            // })}
          >
            Home
          </NavLink> */}
          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
          >
            About
          </NavLink> */}
          {/* <NavLink
            to="/news"
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activeLink)
            }
          >
            News
          </NavLink> */}
        </li>
        <li className={s.navItem}>
          <ActiveNavLink to="/about">About</ActiveNavLink>
        </li>
        <li className={s.navItem}>
          <ActiveNavLink to="/news">News</ActiveNavLink>
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
