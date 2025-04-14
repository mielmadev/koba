import React from 'react';
import './inicio-pag.scss';
import '../../estilos/fondos.scss';

import Fecha from '../fecha/fecha';
import Bandas from '../bandas/bandas';
import VolcanFondo from '../../assets/imagenes/fondos/volcanFondo.webp';

export default function InicioPag() {
  return (
    <div className="inicio-contenedor">
      <div className="inicio-fondo">
        <img src={VolcanFondo} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
        <Fecha />
        <Bandas />
      </div>
    </div>
  );
}