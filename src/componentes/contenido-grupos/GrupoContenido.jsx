import React from "react"
import bandasDatos2025 from "./bandasDatos2025"
import obtenerLineas from "@componentes/utils/obtenerLineas"
import "./grupoContenido.scss"

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
          <div className="grupo-encabezado-superior">
            <div className="grupo-encabezado-logo">
              <img src={banda.imagen} alt={banda.nombre} className="grupo-logo" />
            </div>
            <div className="grupo-encabezado-estilo">
              {[banda.estilo, banda.anio].filter(Boolean).join(", ")}
            </div>
            <div className="grupo-encabezado-origen">
              {[banda.origen.pais, banda.origen.provincia, banda.origen.ciudad]
                .filter(Boolean)
                .join(", ")}
            </div>
          </div>
          <div className="grupo-encabezado-inferior">
            <div className="grupo-encabezado-inferior-izquierda" />
            <div className="grupo-encabezado-resumen">
              <div className="grupo-resumen">{obtenerLineas(banda.resumen)}</div>
              <div className="grupo-integrantes-albums">
                <div className="grupo-integrantes">
                  <strong className="titulo-integrantes">Integrantes:</strong>
                  <ul>
                    {Object.entries(banda.integrantes).map(([rol, valor]) => (
                      <li key={rol}>
                        <span className="integrante-rol">
                          {rol.charAt(0).toUpperCase() + rol.slice(1)}:
                        </span>{" "}
                        {Array.isArray(valor) ? (
                          valor.map((n, i) => (
                            <span className="integrante-nombre" key={i}>
                              {n}
                              {i < valor.length - 1 ? " - " : ""}
                            </span>
                          ))
                        ) : (
                          <span className="integrante-nombre">{valor}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grupo-albums">
                  <strong className="titulo-albums">Álbumes:</strong>
                  <ul>
                    {albumsOrdenados.map((album, idx) => (
                      <li key={album.nombre + (album.anio || idx)}>
                        {album.nombre}
                        {album.anio ? ` (${album.anio})` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pie de grupo */}
      </div>
    </div>
  )
}

export default GrupoContenido
