import React from "react"
import "./ContactoContenido.scss"
import { EmailIcono, WhatsappIcono } from "@iconos/iconos"
import TarjetaContacto from "./TarjetaContacto"
import FormularioEmail from "./FormularioEmail"
import RedesSociales from "./RedesSociales"

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
            tipo="default"
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
