import React from 'react';
import './aboutDatosLista.scss';
import { aboutDatos } from '../../../datos/aboutDatos';

export default function AboutDatosLista() {
  return (
    <div className="about-datos-lista">
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

    </div>
  );
}
