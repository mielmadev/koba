import React from "react";
import './encabezado.scss';
import { logoKoba } from '../../assets/imagenes/images.js';
import Navegador from "./Navegador.jsx";
import Eslogan from "./Eslogan.jsx";

const Encabezado = () => {
  return (
    <header className="encabezado-contenedor">
      <div className="logo-encabezado">
        <img src={logoKoba} alt="Logo Koba" className="logo-img" />
      </div>
      <div className="encabezado-derecha">
        <Navegador />
        <Eslogan />
      </div>
    </header>
  );
};

export default Encabezado;

