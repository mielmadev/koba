import React from 'react';
import BeforeTheDawnContenido from '../contenido-grupos/BeforeTheDawnContenido';
import BeforeTheDawnFondo from '@imagenes/fondos/beforethedawnFondo.webp';

export default function BeforeTheDawnPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={BeforeTheDawnFondo} alt="Before The Dawn Fondo" />
      </div>
      <div className="contenido-pag">
        <BeforeTheDawnContenido />
      </div>
    </div>
  );
}
