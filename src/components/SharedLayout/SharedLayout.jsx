import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <footer>Foter</footer>
    </>
  );
};

export default SharedLayout;
