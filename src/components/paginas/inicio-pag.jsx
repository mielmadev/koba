import React from 'react';
import './inicio-pag.scss';
import Fecha from '../fecha/fecha';
import Bandas from '../encabezado-pie/bandas/bandas';
import Volcan from '../../assets/imagenes/fondos/volcan1620x1080.jpg';

export default function InicioPag() {
  return (
    <div className="inicio-container">
      <div className="inicio-fondo">
        <img src={Volcan} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
        <div className="fecha-componente">
          <Fecha />
        </div>
        <div className='bandas-componente'>
          <Bandas />
        </div>
      </div>
    </div>
  );
}