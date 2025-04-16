import React from 'react';
import './faq-pag.scss';
import '../../estilos/fondos.scss';

import FaqFondo from '../../assets/imagenes/fondos/faqFondo.webp'; 
import FAQ from '../faq/faq';

export default function FaqPag() {
  return (
    <div className="faq-contenedor">
      <div className="faq-fondo">
        <img src={FaqFondo} alt="Preguntas frecuentes" />
      </div>
      <div className="faq-contenido">
        <FAQ />
      </div>
    </div>
  );
}
