import React from 'react';

const GrupoAlbumsMapeo = ({ albums }) => (
  <>
    {albums.map((album, index) => (
      <div key={index}>
        <strong>{album.nombre}</strong> ({album.año})
      </div>
    ))}
  </>
);

export default GrupoAlbumsMapeo;
