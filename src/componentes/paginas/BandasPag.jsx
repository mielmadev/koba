import React from 'react';
import '../../estilos/fondos.scss';
import '../../estilos/scroll.scss';
import BandasLista2025 from '../bandas-contenido/BandasLista2025';
import ContactoFondo from '../../assets/imagenes/fondos/bandasFondo.webp';

export default function BandasPag() {
  return (
    <div className="contenedor-pag">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Contacto Fondo" />
      </div>
      <div className="contenido-pag">
        <BandasLista2025 />

      </div>

    </div>
  );
}