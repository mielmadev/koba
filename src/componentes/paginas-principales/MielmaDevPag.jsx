import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import MielmaDevAlas from "@imagenes/MielmaDev/MielmaDevAlas.webp"
import MielmaDev from "../contenido-paginas/mielmadev-contenido/MielmaDev"

export default function MielmaDevPag() {
  return (
    <PaginaGenerica Fondo={MielmaDevAlas} fondoAlt="Mielma Fondo" claseFondo="mielma-fondo">
      <MielmaDev />
    </PaginaGenerica>
  )
}
