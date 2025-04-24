import React from 'react';
import bandasDatos2025 from '../año-2025-contenido/bandasDatosAño2025';

const SuicidalAngelsPag = () => {
  const banda = bandasDatos2025.find(b => b.nombre === 'Suicidal Angels');

  return (
    <div className='contenido'>
      <h1>{banda.nombre}</h1>
      {/* Aquí puedes agregar más datos del grupo, como descripción, integrantes, etc. */}
      <p>Información sobre el grupo {banda.nombre}.</p>
      <div dangerouslySetInnerHTML={{ __html: banda.spotify }} />
    </div>
  );
};

export default SuicidalAngelsPag;
