import React from "react"
import "./GrupoIntegrantesMapeo.scss"

const GrupoIntegrantesMapeo = ({ integrantes, className = "" }) => (
  <div className={className}>
    {Object.entries(integrantes).map(([rol, nombre]) => (
      <div key={rol}>
        <span className="integrante-rol">{rol.charAt(0).toUpperCase() + rol.slice(1)}:</span>{" "}
        {Array.isArray(nombre) ? (
          nombre.map((n, i) => (
            <span className="integrante-nombre" key={i}>
              {n}
              {i < nombre.length - 1 ? " - " : ""}
            </span>
          ))
        ) : (
          <span className="integrante-nombre">{nombre}</span>
        )}
      </div>
    ))}
  </div>
)

export default GrupoIntegrantesMapeo
