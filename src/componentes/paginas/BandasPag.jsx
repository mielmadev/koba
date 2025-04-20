import React from 'react';
import '../../estilos/fondos.scss';
import '../../estilos/scroll.scss';
import BandasLista2025 from '../bandas/BandasLista2025';
import ContactoFondo from '../../assets/imagenes/fondos/bandasFondo.webp';

export default function BandasPag() {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Contacto Fondo" />
      </div>
      <div className="contacto-contenido">
        <BandasLista2025 />

      </div>

    </div>
  );
}