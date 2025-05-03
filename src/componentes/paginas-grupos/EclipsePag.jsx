import React from 'react';
import EclipseContenido from '@contenido-grupos/EclipseContenido';
import EclipseFondo from '@imagenes/fondos/eclipseFondo.webp';

export default function EclipsePag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={EclipseFondo} alt="Eclipse Fondo" />
      </div>
      <div className="contenido-pag">
        <EclipseContenido />
      </div>
    </div>
  );
}
