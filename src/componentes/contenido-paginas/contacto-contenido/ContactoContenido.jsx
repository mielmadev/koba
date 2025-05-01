import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import './ContactoContenido.scss';



export default function ContactoContenido() {
  return (
    <div className='contenido'>
      <div className='contacto'>
        <div className='whatsapp'>
          <span className='whatsapp-icon'><FaWhatsappSquare /></span>
          <span className='whatsapp-text'> +34 12345678</span>
        </div>
        <div className='email'>
          <span className='email-icon'><FaSquareEnvelope /></span>
          <span className='email-text'> info@koba-live.com</span>
        </div>
      </div>

    </div>
  );
}
