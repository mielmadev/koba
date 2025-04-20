import React from 'react';
import bandasDatos2025 from './bandasDatos2025';
import './bandas.scss';

const Bandas = () => {
  return (
    <div className="bandas">
      {bandasDatos2025.map((banda, index) => (
        <div key={index} className="banda">
          <img src={banda.imagen} alt={banda.nombre} className="banda-imagen" />
          <h3 className="banda-nombre">{banda.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Bandas;
