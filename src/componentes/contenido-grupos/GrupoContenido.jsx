import React from "react"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import obtenerLineas from "@componentes/utils/obtenerLineas"
import "./GrupoContenido.scss"

// Este componente recibe el nombre de la banda por prop o por parámetro de ruta
const GrupoContenido = ({ nombreBanda }) => {
  // Normalizar nombres para comparar correctamente con la URL
  const normalizar = (str) => str.trim().toLowerCase().replace(/\s+/g, "")
  const banda = bandasDatos2025.find((b) => normalizar(b.nombre) === normalizar(nombreBanda))
  if (!banda) return <div>Banda no encontrada</div>
  const albumsOrdenados = banda.albums.slice().sort((a, b) => (b.anio || 0) - (a.anio || 0))

  return (
    <div className="contenido">
      <div className="grupo-contenido">
        <div className="grupo-encabezado">
          {/* Encabezado de la banda */}
          <div className="grupo-encabezado-superior">
            <div className="grupo-encabezado-superior-izquierda">
              <img src={banda.imagen} alt={banda.nombre} className="grupo-logo" />
            </div>
            <div className="grupo-encabezado-superior-derecha">
              <div className="grupo-estilo">{[banda.estilo, banda.anio].filter(Boolean).join(", ")}</div>
              <div className="grupo-origen">{[banda.origen.pais, banda.origen.provincia, banda.origen.ciudad].filter(Boolean).join(", ")}</div>
            </div>
          </div>
          <div className="grupo-encabezado-inferior">
            <div className="grupo-encabezado-inferior-izquierda"></div>
            <div className="grupo-encabezado-resumen">
              <div className="grupo-resumen">{obtenerLineas(banda.resumen)}</div>
              <div className="grupo-integrantes-albums">
                {/* Integrantes */}
                <div className="grupo-integrantes">
                  <strong>Integrantes:</strong>
                  <ul>
                    {Object.entries(banda.integrantes).map(([rol, valor]) => (
                      <li key={rol}>
                        <span style={{ textTransform: "capitalize" }}>{rol}:</span> {Array.isArray(valor) ? valor.join(", ") : valor}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Álbumes */}
                <div className="grupo-albums">
                  <strong>Álbumes:</strong>
                  <ul>
                    {albumsOrdenados.map((album, idx) => (
                      <li key={idx}>{album.nombre}{album.anio ? ` (${album.anio})` : ""}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grupo-pie">
          <iframe
            className="grupo-reproductor"
            style={{ borderRadius: "12px", height: "100px" }}
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

export default GrupoContenido
