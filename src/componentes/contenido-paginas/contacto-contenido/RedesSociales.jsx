import React from "react";
import "./RedesSociales.scss";
import {
  FacebookIcono,
  InstagramIcono,
  SpotifyIcono,
  TikTokIcono,
  XTwitterIcono,
  YoutubeIcono
} from "@iconos/iconos";

export default function RedesSociales() {
  return (
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
  );
}
