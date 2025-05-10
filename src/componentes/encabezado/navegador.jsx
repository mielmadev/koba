import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PAGES_LAZY from "@AppComponentes/PagesLazy";
import Hamburguesa from "./Hamburguesa";
import "./navegador.scss";

const Navegador = () => {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => setAbierto(!abierto);
  const closeMenu = () => setAbierto(false);

  return (
    <nav>
      <Hamburguesa abierto={abierto} onClick={toggleMenu} />
      <div className={`navegador-contenedor${abierto ? " abierto" : ""}`}>
        {PAGES_LAZY.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navegador;
