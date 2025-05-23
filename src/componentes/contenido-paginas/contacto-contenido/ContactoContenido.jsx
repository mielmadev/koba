import React from "react"
import "./ContactoContenido.scss"
import {
  EmailIcono,
  FacebookIcono,
  InstagramIcono,
  SpotifyIcono,
  TikTokIcono,
  WhatsappIcono,
  XTwitterIcono,
  YoutubeIcono
} from "@iconos/iconos"
import TarjetaContacto from "./TarjetaContacto"
import FormularioEmail from "./FormularioEmail"

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
      <div className="contacto-contenedor">
        <div className="contacto">
          <TarjetaContacto
            icono={EmailIcono}
            titulo="Email"
            texto="info@koba-live.com"
            tipo="default"
          />
          <TarjetaContacto
            icono={WhatsappIcono}
            titulo="WhatsApp"
            texto="+34 12345678"
            tipo="whatsapp"
          />
        </div>
        <div className="contacto-formulario">
          <FormularioEmail />
        </div>
      </div>
    </div>
  )
}
