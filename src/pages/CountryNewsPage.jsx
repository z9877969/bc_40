import { Suspense } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const navListStyle = {
  display: "flex",
  width: "300px",
  justifyContent: "space-between",
  margin: "0 auto",
};

const CountryNewsPage = () => {
  const navigate = useNavigate(); // method
  const location = useLocation(); // data

  const handleGoBack = () => {
    console.log("location.state :>> ", location.state);
    navigate(location.state); // "/about?q=tree" | location -> {pathname: "/about", search: "?q=tree"}
  };

  return (
    <>
      <button onClick={handleGoBack}>GoBack</button>
      <ul style={navListStyle}>
        <li>
          <NavLink to="ua" state={location.state}>
            UA
          </NavLink>
        </li>
        <li>
          <NavLink to="fr" state={location.state}>
            FR
          </NavLink>
        </li>
        <li>
          <NavLink to="us" state={location.state}>
            US
          </NavLink>
        </li>
        <li>
          <NavLink to="pl" state={location.state}>
            PL
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CountryNewsPage;
