import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import FaqContenido from "@contenido-paginas/faq-contenido/FaqContenido.jsx"
import FaqFondo from "@imagenes/fondos/faqFondo.webp"

export default function FaqPag() {
  return (
    <PaginaGenerica Fondo={FaqFondo} fondoAlt="Faq Fondo" claseFondo="faq-fondo">
      <FAQ />
    </PaginaGenerica>
  )
}
