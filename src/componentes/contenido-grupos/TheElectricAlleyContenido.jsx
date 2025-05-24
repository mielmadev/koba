import React from "react"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import "./gruposContenido.scss"
import GrupoIntegrantesMapeo from "@mapeos/GrupoIntegrantesMapeo"
import GrupoAlbumsMapeo from "@mapeos/GrupoAlbumsMapeo"
import GrupoEncabezado from "./GrupoEncabezado"

const TheElectricAlleyContenido = () => {
  // Cambia aquí el nombre de la banda para mostrar la info de otra banda
  const banda = bandasDatos2025.find((b) => b.nombre === "The Electric Alley")
  const albumsOrdenados = banda.albums.slice().sort((a, b) => (b.anio || 0) - (a.anio || 0))

  return (
    <div className="contenido">
      <div className="grupo-contenido">
        <div className="grupo-encabezado">
          <GrupoEncabezado
            imagen={banda.imagen}
            nombre={banda.nombre}
            estilo={banda.estilo}
            anio={banda.anio}
            origen={banda.origen}
            integrantes={banda.integrantes}
            resumen={banda.resumen}
            albums={albumsOrdenados}
          />
        </div>
        <div className="grupo-pie">
          <iframe
            className="grupo-reproductor"
            style={{ border_radius: "12px", height: "100px" }}
            src={banda.spotify}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          >
            Tu navegador no soporta iframes. Por favor, visita el enlace directamente en Spotify.
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default TheElectricAlleyContenido
