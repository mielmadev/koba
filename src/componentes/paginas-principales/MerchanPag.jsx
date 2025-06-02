import React from "react"
import PaginaGenerica from "./PaginaGenerica"
import MerchanFondo from "@imagenes/fondos/merchanFondo.webp"
import MerchanContenido from "@contenido-paginas/merchan-contenido/merchan-contenido"


export default function MerchanPag() {
  return (
    <PaginaGenerica Fondo={MerchanFondo} fondoAlt="Merchan Fondo" claseFondo="merchan-fondo">
      <MerchanContenido />
    </PaginaGenerica>
  )
}
