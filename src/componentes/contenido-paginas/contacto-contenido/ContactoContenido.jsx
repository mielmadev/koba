import React from "react";
import "./ContactoContenido.scss";
import {
  EmailIcono,
  FacebookIcono,
  InstagramIcono,
  SpotifyIcono,
  TikTokIcono,
  WhatsappIcono,
  XTwitterIcono,
  YoutubeIcono,
} from "@iconos/iconos";

export default function ContactoContenido() {
  return (
    <div className="contenido">
      <div className="redes-sociales">
        <FacebookIcono
          as="a"
          href="https://www.facebook.com/kobalive.metal/"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-facebook"
        />
        <InstagramIcono
          as="a"
          href="https://www.instagram.com/kobalive/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-instagram"
        />
        <SpotifyIcono
          as="a"
          href="https://open.spotify.com/user/kobalive"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-spotify"
        />
        <TikTokIcono
          as="a"
          href="https://www.tiktok.com/@kobalive"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-tiktok"
        />
        <XTwitterIcono
          as="a"
          href="https://twitter.com/kobalive"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-twitter"
        />
        <YoutubeIcono
          as="a"
          href="https://www.youtube.com/@kobalive"
          target="_blank"
          rel="noopener noreferrer"
          className="icono-social icono-youtube"
        />
      </div>
      <div className="contacto">
        <div className="item-contacto">
          <EmailIcono className="icono-contacto" />
          <span>info@koba-live.com</span>
        </div>
        <div className="item-contacto">
          <WhatsappIcono className="icono-contacto" />
          <span>+34 12345678</span>
        </div>
      </div>
    </div>
  );
}
