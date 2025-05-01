import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import './ContactoContenido.scss';
import IconoFacebook from "../../iconos/IconoFacebook";
import IconoInstagram from "../../iconos/IconoInstagram";
import IconoWhatsapp from "../../iconos/IconoWhatsapp";



export default function ContactoContenido() {
  return (
    <div className='contenido'>
      <div className='contacto'>
        <div className='whatsapp'>
          <a href="https://wa.me/3412345678" target="_blank" rel="noopener noreferrer">
            <IconoWhatsapp className="icono-social" /> +34 12345678
          </a>
        </div>
        <div className='email'>
          <FaEnvelope className="icono-social" /> info@koba-live.com
        </div>
      </div>
      <div className='redes-sociales'>
        <a href="https://www.facebook.com/kobalive.metal/" target="_blank" rel="noopener noreferrer">
          <IconoFacebook className="icono-social" />
        </a>
        <a href="https://www.instagram.com/kobalive/?hl=es" target="_blank" rel="noopener noreferrer">
          <IconoInstagram className="icono-social" />
        </a>
      </div>

    </div>
  );
}
