import React from 'react';
import bandas from '../../../datos/bandas';
import './bandas.scss';

const Bandas = () => {
  return (
    <div className="bandas-container">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {bandas.map((banda, index) => (
          <li key={index}>
            <img src={banda.imagen} alt={banda.nombre} style={{ width: '100px', height: '100px' }} />
            <p>{banda.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bandas;
