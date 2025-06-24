import React from "react"
import { Link } from "react-router-dom"
import "./tarjetaContacto.scss"

// eslint-disable-next-line no-unused-vars
export default function TarjetaContacto({ icono: Icono, titulo, texto, tipo = "default" }) {
  // Si es la tarjeta de mielmadev, la hacemos clicable a /mielmadev
  if (tipo === "mielmadev") {
    return (
      <Link
        className={`tarjeta-contacto tarjeta-${tipo}`}
        to="/mielmadev"
        tabIndex={0}
        style={{ textDecoration: "none" }}
        aria-label="Más información sobre el desarrollador MielmaDev"
      >
        <Icono className="icono-contacto" />
        <div className="info-contacto">
          <span className="titulo-contacto">{titulo}</span>
          <span className="texto-contacto">{texto}</span>
        </div>
      </Link>
    )
  }

  return (
    <div className={`tarjeta-contacto tarjeta-${tipo}`}>
      <Icono className="icono-contacto" />
      <div className="info-contacto">
        <span className="titulo-contacto">{titulo}</span>
        <span className="texto-contacto">{texto}</span>
      </div>
    </div>
  )
}
