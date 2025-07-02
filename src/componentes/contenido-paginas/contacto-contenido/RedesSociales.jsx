import React from "react"
import "./redesSociales.scss"
import {
  FacebookIcono,
  InstagramIcono,
  SpotifyIcono,
  TikTokIcono,
  XTwitterIcono,
  YoutubeIcono,
  MielmaDevIcono
} from "@iconos/iconos"
import { Link } from "react-router-dom"

export default function RedesSociales({ className = "" }) {
  return (
    <div className={`c-contenido__redes ${className}`.trim()}>
      <a
        href="https://www.facebook.com/kobalive.metal/"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-facebook"
      >
        <FacebookIcono />
      </a>
      <a
        href="https://www.instagram.com/kobalive/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-instagram"
      >
        <InstagramIcono />
      </a>
      <a
        href="https://open.spotify.com/user/kobalive"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-spotify"
      >
        <SpotifyIcono />
      </a>
      <a
        href="https://www.tiktok.com/@kobalive"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-tiktok"
      >
        <TikTokIcono />
      </a>
      <a
        href="https://twitter.com/kobalive"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-twitter"
      >
        <XTwitterIcono />
      </a>
      <a
        href="https://www.youtube.com/@kobalive"
        target="_blank"
        rel="noopener noreferrer"
        className="icono-social icono-youtube"
      >
        <YoutubeIcono />
      </a>
      <Link
        to="/mielmadev"
        className="icono-social icono-mielmadev"
        tabIndex={0}
        style={{ textDecoration: "none" }}
        aria-label="Más información sobre el desarrollador MielmaDev"
      >
        <MielmaDevIcono />
      </Link>
    </div>
  )
}
