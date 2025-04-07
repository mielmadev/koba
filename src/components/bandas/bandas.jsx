import React from 'react';
import bandas from '../../../data/bandas';

const Bandas = () => {
  return (
    <div>
      <h1>Bandas</h1>
      <ul>
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
