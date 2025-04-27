import React from 'react';
import { NavLink } from 'react-router-dom';
import PAGES from '../AppComponentes/PagesLazy';
import './navegador.scss';
import '@estilos/enlaces.scss';

const Navegador = () => {
  return (
    <nav>
      <div className="navegador-contenedor">
        {/* Generar enlaces de navegación dinámicamente */}
        {PAGES.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navegador;
