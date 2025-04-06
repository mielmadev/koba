import React from 'react';
import './inicio-pag.scss';
import Volcan from '../../assets/imagenes/fondos/volcan.jpg';

export default function InicioPag() {
  return (
    <div className="inicio-container">
      <div className="inicio-fondo">
        <img src={Volcan} alt="Volcán" />
      </div>
      <div className="inicio-contenido">
      <h1>pagina de inicio</h1>
        <h2>elemento pie página</h2>
        </div>
    </div>
  );
}