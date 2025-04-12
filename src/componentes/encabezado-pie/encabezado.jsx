import React from "react";
import './encabezado.scss';
import { logoKoba } from '../../assets/imagenes/images.js';
import Navegador from '../navegador/navegador'; // Importación del componente Navegador
import Entradas from '../navegador/entradas'; // Importación del componente Entradas

const Encabezado = () => {
  return (
    <header className="encabezado-contenedor">
      <div className="logo-encabezado">
        <img src={logoKoba} alt="Logo Koba" className="logo-img" />
      </div>
      <div className="encabezado-derecha">
        <div className="navegador">
          <Navegador />
        </div>
        <div className="entradas">
          <Entradas />
        </div>
      </div>
    </header>
  );
};

export default Encabezado;

