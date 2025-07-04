import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import MerchanFondo from "@imagenes/fondos/merchanFondo.webp"
import MerchanContenido from "@contenido-paginas/merchan-contenido/MerchanContenido.jsx"

export default function MerchanPag() {
  return (
    <PaginaGenerica Fondo={MerchanFondo} fondoAlt="Merchan Fondo" claseFondo="merchan-fondo">
      <MerchanContenido />
    </PaginaGenerica>
  )
}
