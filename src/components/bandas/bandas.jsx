import React from 'react';
import bandas from '../../../data/bandas';
import './bandas.scss';

const Bandas = () => {
  return (
    <div className="bandas">
      {bandas.map((banda, index) => (
        <div key={index} className="banda-item">
          <img src={banda.imagen} alt={banda.nombre} style={{ width: '100px', height: '100px' }} />
          <p>{banda.nombre}</p>
        </div>
      ))}
    </div>
  );
};

export default Bandas;
