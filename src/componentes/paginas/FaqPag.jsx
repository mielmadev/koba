import React from 'react';
import '../../estilos/fondos.scss';

import FaqFondo from '../../assets/imagenes/fondos/faqFondo.webp';
import FAQ from '../faq/Faq';

export default function FaqPag() {
  return (
    <div className="faq-contenedor">
      <div className="faq-fondo">
        <img src={FaqFondo} alt="Faq Fondo" />
      </div>
      <div className="faq-contenido">
        <FAQ />
      </div>
    </div>
  );
}
