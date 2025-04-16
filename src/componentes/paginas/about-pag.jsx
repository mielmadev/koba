import React from 'react';
import './about-pag.scss';
import '../../estilos/fondos.scss';
import AboutFondo from '../../assets/imagenes/fondos/aboutFondo.webp';

export default function AboutPag() {
  return (
    <div className="about-contenedor">
      <div className="about-fondo">
        <img src={AboutFondo} alt="About Fondo" />
      </div>
      <div className="about-contenido">about</div> 

    </div>
  );
}