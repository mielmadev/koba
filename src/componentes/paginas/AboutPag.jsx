import React from 'react';
import AboutFondo from '@imagenes/fondos/aboutFondo.webp';
import About from '@componentes/about/about';
import AboutVideo from '@componentes/about/AboutVideo';

export default function AboutPag() {
  return (
    <div className="contenedor-pag">
      <div className="about-fondo">
        <img src={AboutFondo} alt="About Fondo" />
      </div>
      <div className="contenido-pag">
        <About />
        <AboutVideo />
      </div>

    </div>
  );
}