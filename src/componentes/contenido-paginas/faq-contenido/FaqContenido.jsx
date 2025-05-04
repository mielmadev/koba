import React, { useState } from 'react';
import faqDatos from '@datos/faqDatos';
import './faqContenido.scss';
import cursorAbajo from '@cursor/KobaPua_32x32_BlancoAbajo.png';
import cursorDerecha from '@cursor/KobaPua_32x32_BlancoDerecha.png';

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

  return (
    <div className="contenido">
      {faqDatos.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-pregunta"
            onClick={() => togglePregunta(index)}
          >
            <span className="faq-pregunta-texto">{item.pregunta}</span>
            <span className="faq-icon">
              {preguntaActiva === index ? (
                <img src={cursorAbajo} alt="Flecha abajo" width={20} height={20} />
              ) : (
                <img src={cursorDerecha} alt="Flecha derecha" width={20} height={20} />
              )}
            </span>
          </div>
          {preguntaActiva === index && (
            <div className="faq-respuesta">{item.respuesta}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;