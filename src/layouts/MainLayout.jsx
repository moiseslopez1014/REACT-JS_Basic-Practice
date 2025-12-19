import React from "react";
import { Link, Outlet } from "react-router-dom";
import ContactPage from "../pages/ContactPage";

const MainLayout = () => {
  return (
    <>
      <nav className="navBar">
        <Link to='/create'>Crear Pokemon</Link>
        <Link to='/contact'>Contacto</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
