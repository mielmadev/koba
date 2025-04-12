import React from 'react';
import './faq-pag.scss';
import Preguntas from '../../assets/imagenes/fondos/preguntas.jpg';

export default function FaqPag() {
  return (
    <div className="faq-container">
      <div className="faq-fondo">
        <img src={Preguntas} alt="Preguntas frecuentes" />
      </div>
      <div className="faq-contenido">
      </div>
    </div>
  );
}
