import React from 'react';
import './inicio-pag.scss';
import FechaContenedor from '../fecha/fecha';
import Bandas from '../encabezado-pie/bandas/bandas';
import Volcan from '../../assets/imagenes/fondos/volcan1620x1080.jpg';

export default function InicioPag() {
  return (
    <div className="inicio-container">
      <div className="inicio-fondo">
        <img src={Volcan} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
        <div className="fecha">
          <FechaContenedor />
        </div>
        <div className='bandas-container'>
          <Bandas />
        </div>
      </div>
    </div>
  );
}