import React from 'react';
import './AsgarthPag.scss';
import bandasDatos2025 from '../año-2025-contenido/bandasDatosAño2025';

const AsgarthPag = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Asgarth');

  return (
    <div className='contenido'>
      <div className='banda-datos'>
        <img src={banda.imagen} alt={banda.nombre} />
        <h1>{banda.nombre}</h1>
        {/* Aquí puedes agregar más datos del grupo, como descripción, integrantes, etc. */}
        <p>Información sobre el grupo Asgarth.</p>
      </div>
      <div className='reproductor'>
        <iframe
          style={{ borderRadius: '12px' }}
          src={banda.spotify}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        >
          Tu navegador no soporta iframes. Por favor, visita el enlace directamente en Spotify.
        </iframe>
      </div>
    </div>
  );
};

export default AsgarthPag;
