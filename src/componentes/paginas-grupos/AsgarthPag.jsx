import React from 'react';
import AsgarthContenido from '../grupos-contenido/AsgarthContenido';
import AsgarthFondo from '@imagenes/fondos/asgarth-fondo.webp';


export default function AsgarthPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={AsgarthFondo} alt="About Fondo" />
      </div>
      <div className="contenido-pag">
        <AsgarthContenido />
      </div>

    </div>
  );
}