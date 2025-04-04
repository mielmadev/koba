import React from "react";
import './encabezado.scss';
import { logoKoba } from '../../assets/imagenes/images.js';
import Navegador from '../navegador/navegador'; // Importación del componente Navegador

const Encabezado = () => {
  return (
    <header className="encabezado-container">
      <div className="logo-encabezado">
        <img src={logoKoba} alt="Logo Koba" className="logo-img" />
      </div>
      <div className="encabezado-derecha">
        <div className="navegador">
          <Navegador /> {/* Asegúrate de que el componente Navegador esté correctamente estilizado */}
        </div>
        <div className="entradas">
          {/* Aquí debería ir el contenido o componente relacionado con "entradas" */}
        </div>
      </div>
    </header>
  );
};

export default Encabezado;

