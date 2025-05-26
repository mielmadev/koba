import React from "react"
import PaginaGenerica from "./PaginaGenerica"
import ContactoContenido from "@contenido-paginas/contacto-contenido/ContactoContenido"
import ContactoFondo from "@imagenes/fondos/contactoFondo.webp"

export default function ContactoPag() {
  return (
    <PaginaGenerica Fondo={ContactoFondo} fondoAlt="Contacto Fondo" claseFondo="contacto-fondo">
      <ContactoContenido />
    </PaginaGenerica>
  )
}
