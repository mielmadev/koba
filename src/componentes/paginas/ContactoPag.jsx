import React from 'react';
import './ContactoPag.scss';
import '../../estilos/fondos.scss';
import ContactoFondo from '../../assets/imagenes/fondos/contactoFondo.webp';

export default function ContactoPag() {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Contacto Fondo" />
      </div>
      <div className="contacto-contenido">contacto</div> 
   
    </div>
  );
}
