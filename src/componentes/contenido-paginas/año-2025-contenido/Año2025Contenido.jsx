import React from 'react';
import bandasDatos2025 from '@datos/bandasDatosAño2025';
import BandasImagenesMapeo from '@mapeos/BandasImagenesMapeo';
import './año2025Contenido.scss';

const Contenido2025 = () => {
  return (
    <div className="contenido-2025">
      <BandasImagenesMapeo bandas={bandasDatos2025} />
    </div>
  );
};

export default Contenido2025;
