import React, { useState } from 'react';
import '../../estilos/contenido/faqContenido.scss';
import preguntasRespuestas from '../../datos/preguntasRespuestas';

const PreguntaRespuesta = React.memo(({ id, pregunta, respuesta, expandida, toggleExpansion }) => {
  return (
    <div className="faq-item">
      <button
        className={`faq-pregunta ${expandida ? 'activa' : ''}`}
        onClick={() => toggleExpansion(id)}
        aria-expanded={expandida}
        aria-controls={`respuesta-${id}`}
        id={`pregunta-${id}`}
      >
        {pregunta}
        <span className="faq-icono">{expandida ? '−' : '+'}</span>
      </button>
      <div
        id={`respuesta-${id}`}
        className={`faq-respuesta ${expandida ? 'visible' : ''}`}
        aria-labelledby={`pregunta-${id}`}
        role="region"
      >
        <p>{respuesta}</p>
      </div>
    </div>
  );
});

const FaqContenido = () => {
  const [preguntaActivaId, setPreguntaActivaId] = useState(null);

  const toggleExpansion = (id) => {
    setPreguntaActivaId(preguntaActivaId === id ? null : id);
  };

  return (
    <section className="faq">
      <h1>Preguntas frecuentes</h1>
      <div className="faq-contenedor">
        {preguntasRespuestas.map(({ id, pregunta, respuesta }) => (
          <PreguntaRespuesta
            key={id}
            id={id}
            pregunta={pregunta}
            respuesta={respuesta}
            expandida={preguntaActivaId === id}
            toggleExpansion={toggleExpansion}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqContenido;