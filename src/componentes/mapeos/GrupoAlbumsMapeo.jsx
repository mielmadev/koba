import React from 'react';
import './GrupoAlbumsMapeo.scss';
const GrupoAlbumsMapeo = ({ albums }) => (
  <>
    {albums.map((album, index) => (
      <div key={index}>
        <span className="album-nombre">{album.nombre}</span>{' '}
        (<span className="album-año">{album.año}</span>)
      </div>
    ))}
  </>
);

export default GrupoAlbumsMapeo;
