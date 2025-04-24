import React from 'react';
import AboutContenido from '../about-contenido/AboutContenido';
import AboutFondo from '@imagenes/fondos/aboutFondo.webp';

export default function AboutPag() {
  return (
    <div className="contenedor-pag">
      <div className="about-fondo">
        <img src={AboutFondo} alt="About Fondo" />
      </div>
      <div className="contenido-pag">
        <AboutContenido />
      </div>

    </div>
  );
}