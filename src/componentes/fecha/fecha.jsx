import React from 'react';
import { fecha, ubicacion } from '@datos/fechaDatos';
import './fecha.scss';

const Fecha = () => {
  return (
    <div className='fecha-contenedor'>
      <div className='fecha'>{fecha} en {ubicacion}</div>
    </div>
  );
};

export default Fecha;