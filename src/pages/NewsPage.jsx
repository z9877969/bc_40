import { NavLink, Outlet } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>

      <ul
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <li>
          <NavLink to="ua">UA</NavLink>
        </li>
        <li>
          <NavLink to="fr">FR</NavLink>
        </li>
        <li>
          <NavLink to="us">US</NavLink>
        </li>
        <li>
          <NavLink to="pl">PL</NavLink>
          {/* /parrentPath/pl */}
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default NewsPage;
