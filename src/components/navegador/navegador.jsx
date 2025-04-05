import React from 'react';
import { Link } from 'react-router-dom';
import './navegador.scss';

const Navegador = () => {
  return (
    <nav>
      <div className="navegador-contenedor">
        <Link to="/inicio-pag">Inicio</Link>
        <Link to="/faq-pag">FAQ</Link>
        <Link to="/about-pag">Acerca de</Link>
        <Link to="/merchan-pag">Merchandising</Link>
        <Link to="/contacto-pag">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navegador;
