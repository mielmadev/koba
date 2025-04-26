import React from 'react';
import bandasDatos2025 from '@datos/bandasDatosAño2025';
import './asgarthContenido.scss'

const AsgarthContenido = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Asgarth');

  return (
    <div className='contenido'>
      <div className='banda-contenedor'>
        <div className='banda-contenido'>
          <div className='banda-datos'>
            <img src={banda.imagen} alt={banda.nombre} className="banda-imagen" />
            <div className='banda-estilo'>
              Estilo:
            </div>
            <div className='banda-año'>
              Año:
            </div>
            <div className='banda-origen'>
              Origen:
            </div>
          </div>
          <div className='reproductor'>
            <iframe
              className='banda-reproductor'
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
        <div className='banda-descripcion'>
          descripción:
        </div>

      </div>
    </div>
  );
};

export default AsgarthContenido;
