import React from 'react';
import './inicio-pag.scss';
import Fecha from '../fecha/fecha';
import Bandas from '../bandas/bandas';
import Volcan from '../../assets/imagenes/fondos/volcan1620x1080.jpg';

export default function InicioPag() {
  return (
    <div className="inicio-contenedor">
      <div className="inicio-fondo">
        <img src={Volcan} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
          <Fecha />
          <Bandas />
      </div>
    </div>
  );
}