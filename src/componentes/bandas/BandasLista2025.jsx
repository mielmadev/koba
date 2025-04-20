import React from 'react';
import { Link } from 'react-router-dom';
import bandasDatos2025 from './bandasDatos2025';
import './bandasLista2025.scss';

const BandasLista2025 = () => {
  // Ordenar alfabéticamente por nombre
  const bandasOrdenadas = [...bandasDatos2025].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  return (
    <div className="bandas">
      {bandasOrdenadas.map((banda, index) => (
        <div key={index} className="banda">
          <div className="banda-nombre">
            <Link to={`/bandas/${banda.nombre.toLowerCase().replace(/\s+/g, '-')}`}>
              {banda.nombre}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BandasLista2025;
