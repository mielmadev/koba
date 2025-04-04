import React from 'react';
import { Link } from 'react-router-dom';

const Navegador = () => {
  return (
    <nav>
      <div className="navegador-contenedor">
        <ul>
          <li><Link to="/inicio-pag">Inicio</Link></li>
          <li><Link to="/faq-pag">FAQ</Link></li>
          <li><Link to="/about-pag">Acerca de</Link></li>
          <li><Link to="/merchan-pag">Merchandising</Link></li>
          <li><Link to="/contacto-pag">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegador;
