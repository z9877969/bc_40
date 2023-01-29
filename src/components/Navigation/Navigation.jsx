import s from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <a className={s.navLink} href="/">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;


// const StyledNavLink = styled(NavLink)`
//   font-size: 22px;
//   padding: 10px 35px;
//   border: 1px solid yellowgreen;
//   color: yellowgreen;
//   background-color: transparent;
//   border-radius: 5px;
//   text-decoration: none;

//   &.active {
//     background-color: #ffff0080;
//     color: black;
//   }
// `;