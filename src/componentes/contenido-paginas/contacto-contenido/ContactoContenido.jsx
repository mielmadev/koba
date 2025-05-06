import React from 'react';
import './ContactoContenido.scss';
import WhatsappIcono from '@iconos/WhatsappIcono';
import EmailIcono from '@iconos/EmailIcono';
import FacebookIcono from '@iconos/FacebookIcono';
import InstagramIcono from '@iconos/InstagramIcono';
import XTwitterIcono from '@iconos/XTwitterIcono';
import SpotifyIcono from '@iconos/SpotifyIcono';
import YoutubeIcono from '@iconos/YoutubeIcono';
import TikTokIcono from '@iconos/TiktokIcono';

export default function ContactoContenido() {
  return (
    <div className='contenido'>
      <div className='contacto'>
        <div className='whatsapp'>
          <WhatsappIcono className="icono-contacto" /> +34 12345678
        </div>
        <div className='email'>
          <EmailIcono className="icono-contacto" /> info@koba-live.com
        </div>
      </div>
      <div className='redes-sociales'>
        <FacebookIcono as='a' href="https://www.facebook.com/kobalive.metal/" target="_blank" rel="noopener noreferrer" className="icono-social" />
        <InstagramIcono as='a' href="https://www.instagram.com/kobalive/?hl=es" target="_blank" rel="noopener noreferrer" className="icono-social" />
        <XTwitterIcono as='a' href="https://twitter.com/kobalive" target="_blank" rel="noopener noreferrer" className="icono-social" />
        <SpotifyIcono as='a' href="https://open.spotify.com/user/kobalive" target="_blank" rel="noopener noreferrer" className="icono-social" />
        <YoutubeIcono as='a' href="https://www.youtube.com/@kobalive" target="_blank" rel="noopener noreferrer" className="icono-social" />
        <TikTokIcono as='a' href="https://www.tiktok.com/@kobalive" target="_blank" rel="noopener noreferrer" className="icono-social" />
      </div>

    </div>
  );
}
