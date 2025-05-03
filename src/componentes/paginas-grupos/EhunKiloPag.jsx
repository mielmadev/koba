import React from 'react';
import EhunKiloContenido from '@contenido-grupos/EhunKiloContenido';
import EhunKiloFondo from '@imagenes/fondos/ehunKiloFondo.webp';

export default function EclipsePag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={EhunKiloFondo} alt="Eclipse Fondo" />
      </div>
      <div className="contenido-pag">
        <EhunKiloContenido />
      </div>
    </div>
  );
}
