import React, { useState } from 'react';
import faqDatos from '../../datos/faq-datos';
import './faq.scss';

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

  return (
    <div className="faq-contenedor">
      {faqDatos.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-pregunta"
            onClick={() => togglePregunta(index)}
          >
            <span className="faq-pregunta-texto">{item.pregunta}</span>
            <span className="faq-icon">
              {preguntaActiva === index ? '🔽' : '▶️'}
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