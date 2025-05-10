import React from 'react';
import Fecha from '@fecha/Fecha';
import Contenido2025 from '@contenido-paginas/anio-2025-contenido/Anio2025Contenido';
import VolcanFondo from '@imagenes/fondos/volcanFondo.webp';

export default function InicioPag() {
  return (
    <div className="contenedor-pag">
      <div className="inicio-fondo">
        <img src={VolcanFondo} alt="Volcan Fondo" />
      </div>
      <div className="contenido-pag">
        <Fecha />
        <Contenido2025 />
      </div>
    </div>
  );
}