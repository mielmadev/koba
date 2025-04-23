import React from 'react';
import Fecha from '../fecha/Fecha';
import Bandas2025 from '../bandas/Bandas2025';
import VolcanFondo from '../../assets/imagenes/fondos/volcanFondo.webp';

export default function InicioPag() {
  return (
    <div className="contenedor-pag">
      <div className="inicio-fondo">
        <img src={VolcanFondo} alt="Volcan Fondo" />
      </div>
      <div className="contenido-pag">
        <Fecha />
        <Bandas2025 />
      </div>
    </div>
  );
}