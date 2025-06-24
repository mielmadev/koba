import React from "react"
import "./contactoContenido.scss"
import { EmailIcono, WhatsappIcono } from "@iconos/iconos"
import TarjetaContacto from "./TarjetaContacto.jsx"
import FormularioEmail from "./FormularioEmail.jsx"
import RedesSociales from "./RedesSociales.jsx"

export default function ContactoContenido() {
  return (
    <div className="contenido">
      <RedesSociales className="redes-sociales" />
      <div className="contacto-contenedor">
        <div className="contacto">
          <TarjetaContacto
            icono={EmailIcono}
            titulo="Email"
            texto="info@koba-live.com"
            tipo="email"
          />
          <TarjetaContacto
            icono={WhatsappIcono}
            titulo="WhatsApp"
            texto="+34 12345678"
            tipo="whatsapp"
          />
        </div>
        <div className="contacto-formulario">
          <FormularioEmail />
        </div>
      </div>
    </div>
  )
}
