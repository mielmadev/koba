import React from 'react';
import './about.scss';
import '../../estilos/scroll.scss';
import { aboutDatos } from './aboutDatos';
import AboutVideo from './AboutVideo.jsx';

export default function About() {
  return (
    <div className="about-contenedor">
      <div className='about-h1'>
        {aboutDatos.titulo}
      </div>

      <div className='about-h2'>
        {aboutDatos.subtitulo1}
      </div>

      <div className='about-texto'>
        {aboutDatos.texto1}
      </div>

      <div className='about-h2'>
        {aboutDatos.subtitulo2}
      </div>

      <div className='about-texto'>
        {aboutDatos.texto2}
      </div>

      <div className='about-h3'>
        {aboutDatos.promesa}
      </div>

      <div className='about-texto'>
        {aboutDatos.texto3}
      </div>

      <div className='about-h3'>
        {aboutDatos.pregunta}
      </div>

      <div className='about-h2'>
        {aboutDatos.subtitulo3}
      </div>

      {/* Usar el componente AboutVideo */}
      <AboutVideo />
    </div>
  );
}
