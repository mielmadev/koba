import React from 'react';
import bandasDatos2025 from './bandasDatosAño2025';
import './año2025Contenido.scss';

const Contenido2025 = () => {
  return (
    <div className="contenido-2025">
      {bandasDatos2025.map((banda, index) => (
        <div key={index} className="banda">
          <img src={banda.imagen} alt={banda.nombre} className="banda-imagen" />
        </div>
      ))}
    </div>
  );
};

export default Contenido2025;
