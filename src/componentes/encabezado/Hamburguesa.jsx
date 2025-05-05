import React from 'react';
import './hamburguesa.scss';

const Hamburguesa = ({ abierto, onClick }) => (
  <button className={`hamburguesa${abierto ? ' abierto' : ''}`} onClick={onClick} aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}>
    <span className="linea linea1" />
    <span className="linea linea2" />
    <span className="linea linea3" />
  </button>
);

export default Hamburguesa;
