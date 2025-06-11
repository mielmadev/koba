import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import AboutContenido from "@contenido-paginas/about-contenido/AboutContenido.jsx"
import AboutFondo from "@imagenes/fondos/aboutFondo.webp"

export default function AboutPag() {
  return (
    <PaginaGenerica Fondo={AboutFondo} fondoAlt="About Fondo" claseFondo="about-fondo">
      <AboutContenido />
    </PaginaGenerica>
  )
}
