import React from 'react';
import './inicio-pag.scss';
import Volcan from '../../assets/imagenes/fondos/volcan1620x1080.jpg';
import Suicidal from '../../assets/imagenes/bandas/Suicidal_Angels_Logo.png';

export default function InicioPag() {
  return (
    <div className="inicio-container">
      <div className="inicio-fondo">
        <img src={Volcan} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
        <div className="fecha">
          <h1>Fecha</h1>
        </div>
        <div className='bandas-container'>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
          <div className='bandas'>
            <img src={Suicidal} alt="Volcán" />
          </div>
        </div>
      </div>
    </div>
  );
}