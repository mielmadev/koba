import React from 'react';
import { NavLink } from 'react-router-dom';
import './navegador.scss';

const Navegador = () => {
  return (
    <nav>
      <div className="navegador-contenedor">
        <NavLink
          to="/inicio-pag"
          className={({ isActive }) => isActive ? 'navlink inicio active' : 'navlink inicio'}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/faq-pag"
          className={({ isActive }) => isActive ? 'navlink faq active' : 'navlink faq'}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/about-pag"
          className={({ isActive }) => isActive ? 'navlink about active' : 'navlink about'}
        >
          About
        </NavLink>
        <NavLink
          to="/merchan-pag"
          className={({ isActive }) => isActive ? 'navlink merchan active' : 'navlink merchan'}
        >
          Merchandising
        </NavLink>
        <NavLink
          to="/contacto-pag"
          className={({ isActive }) => isActive ? 'navlink contacto active' : 'navlink contacto'}
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navegador;
