import React from 'react';
import MoonshinerdsContenido from '../contenido-grupos/MoonshinerdsContenido';
import MoonshinerdsFondo from '@imagenes/fondos/moonshinerdsFondo.webp';

export default function MoonshinerdsPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={MoonshinerdsFondo} alt="Moonshinerds Fondo" />
      </div>
      <div className="contenido-pag">
        <MoonshinerdsContenido />
      </div>
    </div>
  );
}
