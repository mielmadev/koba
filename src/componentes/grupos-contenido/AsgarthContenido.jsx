import React from 'react';
import bandasDatos2025 from '@datos/bandasDatosAño2025';
import './asgarthContenido.scss'

const AsgarthContenido = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Asgarth');

  return (
    <div className='contenido'>
      <div className='grupo-contenido'>
        <div className='grupo-encabezado'>
          <div className='grupo-encabezado-izquierda'>
            <img src={banda.imagen} alt={banda.nombre}
              className="grupo-logo" />
            <div className='grupo-estilo-año'>
              <div className='grupo-estilo'>
                {banda.estilo}
              </div>
              <div className='grupo-año'>
                {banda.año}
              </div>
            </div>
            <div className='grupo-origen'>
              <div className='grupo-origen-pais'>
                {banda.origen.pais}
              </div>
              <div className='grupo-origen-provincia'>
                {banda.origen.provincia}
              </div>
              <div className='grupo-origen-ciudad'>
                {banda.origen.ciudad}

              </div>
            </div>
            <div className='grupo-integrantes'>
              {Object.entries(banda.integrantes).map(([rol, nombre]) => (
                <div key={rol}>
                  <strong>{rol.charAt(0).toUpperCase() + rol.slice(1)}:</strong> {nombre}
                </div>
              ))}
            </div>
          </div>
          <div className='grupo-encabezado-derecha'>
            <iframe
              className='grupo-reproductor'
              style={{ borderRadius: '12px' }}
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

        <div className='grupo-descripcion'>
          <div className='banda-resumen'>
            {banda.resumen}
          </div>

          <div className='banda-albums'>
            <h3>Álbumes</h3>
            <ul>
              {banda.albums.map((album, index) => (
                <li key={index}>
                  <strong>{album.nombre}</strong> ({album.año}): {album.descripcion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsgarthContenido;
