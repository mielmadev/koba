import React from "react"
import PaginaGenerica from "./PaginaGenerica"
import Contenido2025 from "@contenido-paginas/anio-2025-contenido/Anio2025Contenido"
import VolcanFondo from "@imagenes/fondos/volcanFondo.webp"

export default function InicioPag() {
  return (
    <PaginaGenerica Fondo={VolcanFondo} fondoAlt="Volcan Fondo" claseFondo="inicio-fondo">
      <Contenido2025 />
    </PaginaGenerica>
  )
}
