import React from 'react';

const GrupoIntegrantesMapeo = ({ integrantes }) => (
  <>
    {Object.entries(integrantes).map(([rol, nombre]) => (
      <div key={rol}>
        <strong>{rol.charAt(0).toUpperCase() + rol.slice(1)}:</strong>{' '}
        {Array.isArray(nombre) ? nombre.join(' - ') : nombre}
      </div>
    ))}
  </>
);

export default GrupoIntegrantesMapeo;
