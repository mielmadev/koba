import React from "react"
import ContactoContenido from "@contenido-paginas/contacto-contenido/ContactoContenido"
import ContactoFondo from "@imagenes/fondos/contactoFondo.webp"

export default function ContactoPag() {
  return (
    <div className="contenedor-pag">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Contacto Fondo" />
      </div>
      <div className="contenido-pag">
        <ContactoContenido />
      </div>
    </div>
  )
}
