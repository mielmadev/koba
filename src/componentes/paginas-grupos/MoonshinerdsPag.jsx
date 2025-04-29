import React from 'react';
import MoonshinerdContenido from '../contenido-grupos/MoonshinerdContenido';
import MoonshinerdsFondo from '@imagenes/fondos/moonshinerdsFondo.webp';

export default function MoonshinerdsPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={MoonshinerdsFondo} alt="About Fondo" />
      </div>
      <div className="contenido-pag">
        <MoonshinerdContenido />
      </div>
    </div>
  );
}
