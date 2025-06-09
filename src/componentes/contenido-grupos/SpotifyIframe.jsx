import React from "react"
import "./SpotifyIframe.scss"

const SpotifyIframe = ({ spotify, nombre }) => (
  <div className="grupo-pie">
    <iframe
      className="grupo-reproductor"
      style={{ borderRadius: "12px", height: "100px" }}
      src={spotify}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={`Spotify de ${nombre}`}
    >
      Tu navegador no soporta iframes. Por favor, visita el enlace directamente en Spotify.
    </iframe>
  </div>
)

export default SpotifyIframe
