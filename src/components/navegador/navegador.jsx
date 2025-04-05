import React from 'react';
import { NavLink } from 'react-router-dom'; // Cambiar Link por NavLink
import './navegador.scss';

const Navegador = () => {
  return (
    <nav>
      <div className="navegador-contenedor">
        <NavLink to="/inicio-pag" activeClassName="active">Inicio</NavLink>
        <NavLink to="/faq-pag" activeClassName="active">FAQ</NavLink>
        <NavLink to="/about-pag" activeClassName="active">Acerca de</NavLink>
        <NavLink to="/merchan-pag" activeClassName="active">Merchandising</NavLink>
        <NavLink to="/contacto-pag" activeClassName="active">Contacto</NavLink>
      </div>
    </nav>
  );
};

export default Navegador;
