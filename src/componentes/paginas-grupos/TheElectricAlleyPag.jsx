import React from 'react';
import TheElectricAlleyContenido from '../contenido-grupos/TheElectricAlleyContenido';
import TheElectricAlleyFondo from '@imagenes/fondos/theElectricAlleyFondo.webp';

export default function TheElectricAlleyPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={TheElectricAlleyFondo} alt="The Electric Alley Fondo" />
      </div>
      <div className="contenido-pag">
        <TheElectricAlleyContenido />
      </div>
    </div>
  );
}
