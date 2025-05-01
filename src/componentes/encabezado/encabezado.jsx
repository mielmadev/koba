import React from "react";
import './encabezado.scss';
import LogoKoba from '@imagenes/logos/logoKoba.png';
import Eslogan from "./Eslogan.jsx";
import Navegador from "./Navegador.jsx";

const Encabezado = () => {
  return (
    <header className="encabezado-contenedor">
      <div className="logo-encabezado">
        <img src={LogoKoba} alt="Logo Koba" className="logo-img" />
      </div>
      <div className="encabezado-derecha">
        <div className="encabezado-navegador">
          <Navegador />
        </div>
        <div className="encabezado-eslogan">
          <Eslogan />
        </div>
      </div>
    </header>
  );
};

export default Encabezado;

