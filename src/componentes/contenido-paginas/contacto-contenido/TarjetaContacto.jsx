import React from "react"
import { Link } from "react-router-dom"
import "./tarjetaContacto.scss"

// eslint-disable-next-line no-unused-vars
export default function TarjetaContacto({ icono: Icono, titulo, texto, tipo = "default" }) {
  // Si es la tarjeta de mielmadev, la hacemos clicable a /mielmadev
  if (tipo === "mielmadev") {
    return (
      <Link
        className={`c-tarjeta-contacto c-tarjeta-contacto--${tipo}`}
        to="/mielmadev"
        tabIndex={0}
        style={{ textDecoration: "none" }}
        aria-label="Más información sobre el desarrollador MielmaDev"
      >
        <Icono className="c-tarjeta-contacto__icono" />
        <div className="c-tarjeta-contacto__info">
          <span className="c-tarjeta-contacto__titulo">{titulo}</span>
          <span className="c-tarjeta-contacto__texto">{texto}</span>
        </div>
      </Link>
    )
  }

  return (
    <div className={`c-tarjeta-contacto c-tarjeta-contacto--${tipo}`}>
      <Icono className="c-tarjeta-contacto__icono" />
      <div className="c-tarjeta-contacto__info">
        <span className="c-tarjeta-contacto__titulo">{titulo}</span>
        <span className="c-tarjeta-contacto__texto">{texto}</span>
      </div>
    </div>
  )
}
