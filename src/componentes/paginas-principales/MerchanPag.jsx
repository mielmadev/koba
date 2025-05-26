import React from "react"
import PaginaGenerica from "./PaginaGenerica"
import MerchanFondo from "@imagenes/fondos/merchanFondo.webp"

export default function MerchanPag() {
  return (
    <PaginaGenerica Fondo={MerchanFondo} fondoAlt="Merchan Fondo" claseFondo="merchan-fondo">
      {/* Aquí irá el componente de contenido de Merchan más adelante */}
    </PaginaGenerica>
  )
}
