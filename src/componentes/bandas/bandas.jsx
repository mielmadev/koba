import React from 'react';
import bandaDatos from '../../datos/banda-datos';
import './bandas.scss';

const Bandas = () => {
  return (
    <div className="bandas">
      {bandaDatos.map((banda, index) => (
        <div key={index} className="banda">
          <img src={banda.imagen} alt={banda.nombre} className="banda-imagen" />
          <h3 className="banda-nombre">{banda.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Bandas;
