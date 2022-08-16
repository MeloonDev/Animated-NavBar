import NavBar from "../components/NavBar";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
