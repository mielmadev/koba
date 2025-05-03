import React from 'react';
import WolfheartContenido from '@contenido-grupos/WolfheartContenido';
import WolfheartFondo from '@imagenes/fondos/wolfheartFondo.webp';

export default function WolfheartPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={WolfheartFondo} alt="Wolfheart Fondo" />
      </div>
      <div className="contenido-pag">
        <WolfheartContenido />
      </div>
    </div>
  );
}
