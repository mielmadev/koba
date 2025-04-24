import React from 'react';
import './AsgarthPag.scss';
import bandasDatos2025 from '../año-2025-contenido/bandasDatosAño2025';

const AsgarthPag = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Asgarth');

  return (
    <div className='contenido'>
      <h1>{banda.nombre}</h1>
      {/* Aquí puedes agregar más datos del grupo, como descripción, integrantes, etc. */}
      <p>Información sobre el grupo Asgarth.</p>
      <div className='reproductor' >
      <iframe
        style={{ borderRadius: '12px' }}
        src={banda.spotify}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        >spotify</iframe>
      </div>
    </div>
  );
};

export default AsgarthPag;
