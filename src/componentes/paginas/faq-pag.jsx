import React from 'react';
import './faq-pag.scss';
import Preguntas from '../../assets/imagenes/fondos/preguntas.jpg'; 7
import FAQ from '../faq/faq';

export default function FaqPag() {
  return (
    <div className="faq-contenedor">
      <div className="faq-fondo">
        <img src={Preguntas} alt="Preguntas frecuentes" />
      </div>
      <div className="faq-contenido">
        <FAQ />
      </div>
    </div>
  );
}
