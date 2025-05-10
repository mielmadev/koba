import React from 'react';
import bandasDatos2025 from '@datos/bandasDatosAnio2025';
import './gruposContenido.scss'
import GrupoIntegrantesMapeo from '@mapeos/GrupoIntegrantesMapeo';
import GrupoAlbumsMapeo from '@mapeos/GrupoAlbumsMapeo';

const WolfheartContenido = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Wolfheart ');
  const albumsOrdenados = banda.albums
    .slice()
    .sort((a, b) => (b.anio || 0) - (a.anio || 0));

  return (
    <div className='contenido'>
      <div className='grupo-contenido'>
        <div className='grupo-encabezado'>
          <div className='grupo-encabezado-superior'>
            <div className='grupo-encabezado-superior-izquierda'>
              <img src={banda.imagen} alt={banda.nombre}
                className="grupo-logo" />
            </div>
            <div className='grupo-encabezado-superior-derecha'>
              <div className='grupo-estilo'>{banda.estilo} - {banda.anio}</div>
              <div className='grupo-origen'>{banda.origen.pais} - {banda.origen.provincia} - {banda.origen.ciudad}</div>
            </div>
          </div>
          <div className='grupo-encabezado-inferior'>
            <div className='grupo-encabezado-inferior-izquierda'>
              <div className='grupo-integrantes'>
                <GrupoIntegrantesMapeo integrantes={banda.integrantes} />
              </div>
            </div>
            <div className='grupo-encabezado-inferior-derecha'>
              <div className='grupo-resumen'>{banda.resumen}</div>
              <div className='grupo-albums'>
                <GrupoAlbumsMapeo albums={albumsOrdenados} />
              </div>
            </div>
          </div>
        </div>
        <div className='grupo-pie'>
          <iframe
            className='grupo-reproductor'
            style={{ border_radius: '12px', height: '100px' }}
            src={banda.spotify}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          >
            Tu navegador no soporta iframes. Por favor, visita el enlace directamente en Spotify.
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default WolfheartContenido;
