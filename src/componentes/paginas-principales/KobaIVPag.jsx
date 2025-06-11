import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import KobaIVContenido from "@contenido-paginas/koba-iv-contenido/KobaIVContenido.jsx"
import VolcanFondo from "@imagenes/fondos/volcanFondo.webp"

export default function KobaIVPag() {
  return (
    <PaginaGenerica Fondo={VolcanFondo} fondoAlt="Volcan Fondo" claseFondo="inicio-fondo">
      <KobaIVContenido />
    </PaginaGenerica>
  )
}
