import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import './ContactoContenido.scss';
import FacebookIcono from "@iconos/FacebookIcono";
import InstagramIcono from "@iconos/InstagramIcono";
import WhatsappIcono from "@iconos/WhatsappIcono";



export default function ContactoContenido() {
  return (
    <div className='contenido'>
      <div className='contacto'>
        <div className='whatsapp'>
          <WhatsappIcono className="icono-contacto" /> +34 12345678
        </div>
        <div className='email'>
          <FaEnvelope className="icono-contacto" /> info@koba-live.com
        </div>
      </div>
      <div className='redes-sociales'>
        <a href="https://www.facebook.com/kobalive.metal/" target="_blank" rel="noopener noreferrer">
          <FacebookIcono className="icono-social" />
        </a>
        <a href="https://www.instagram.com/kobalive/?hl=es" target="_blank" rel="noopener noreferrer">
          <InstagramIcono className="icono-social" />
        </a>
      </div>

    </div>
  );
}
