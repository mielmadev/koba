import React from 'react';
import './contacto-pag.scss';
import '../../estilos/fondos.scss';
import ContactoFondo from '../../assets/imagenes/fondos/contactoFondo.webp';

export default function ContactoPag() {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Volcán" />
      </div>
    </div>
  );
}
