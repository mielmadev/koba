import React from "react"
import FaqFondo from "@imagenes/fondos/faqFondo.webp"
import FAQ from "@contenido-paginas/faq-contenido/FaqContenido"

export default function FaqPag() {
  return (
    <div className="contenedor-pag">
      <div className="faq-fondo">
        <img src={FaqFondo} alt="Faq Fondo" />
      </div>
      <div className="contenido-pag">
        <FAQ />
      </div>
    </div>
  )
}
