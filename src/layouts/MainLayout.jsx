import React from "react";
import { Link, Outlet } from "react-router-dom";
import ContactPage from "../pages/ContactPage";

const MainLayout = () => {
  return (
    <>
      <h1>Practica basica ReactJS - Pokemons</h1>
      <nav className="navBar">
        <Link to='/create'>Crear Pokemon</Link>
        <Link to='/contact'>Contacto</Link>
      </nav>
      <Outlet />
      <p id="footer">Proyecto de listado de Pokemons - Practica basica de Modulo ReactJS</p>
    </>
  );
};

export default MainLayout;
