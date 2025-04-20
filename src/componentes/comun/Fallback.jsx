import React from 'react';
import Pua from '../../assets/imagenes/pua/KobaPua_300x300.png';
import './Fallback.scss';

function Fallback() {
  return (
    <div className="fallback-container">
      <img src={Pua} alt="Cargando..." className="fallback-image" />
    </div>
  );
}

export default Fallback;
