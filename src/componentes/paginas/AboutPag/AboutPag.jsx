import React from 'react';
import './aboutPag.scss';
import '../../estilos/fondos.scss';
import AboutFondo from '../../assets/imagenes/fondos/aboutFondo.webp';
import About from '../../about/About';

export default function AboutPag() {
  return (
    <div className="contenedor">
      <div className="about-fondo">
        <img src={AboutFondo} alt="About Fondo" />
      </div>
      <div className="about-contenido">
        <About />
      </div>

    </div>
  );
}