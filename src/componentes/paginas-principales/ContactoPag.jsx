import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import ContactoContenido from "@contenido-paginas/contacto-contenido/ContactoContenido.jsx"
import ContactoFondo from "@imagenes/fondos/contactoFondo.webp"

export default function ContactoPag() {
  return (
    <PaginaGenerica Fondo={ContactoFondo} fondoAlt="Contacto Fondo" claseFondo="contacto-fondo">
      <ContactoContenido />
    </PaginaGenerica>
  )
}
