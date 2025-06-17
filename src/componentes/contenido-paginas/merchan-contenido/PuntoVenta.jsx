import React from "react"
import "./PuntoVenta.scss"
import eternalSoulLogo from "@imagenes/merchan/eternal-soul-logo.webp"

const PuntoVenta = () => (
  <div className="punto-venta">
    <div className="punto-venta-titulo">Punto de Venta KOBA</div>
    <div className="punto-venta-descripcion">
      Consigue tu merchandising oficial de KOBA en nuestro punto de venta durante el evento, contactando con la organización o visitando Eternal Soul Tattoo Studio. Disponemos de camisetas, sudaderas y mucho más. ¡Apoya el festival y llévate un recuerdo único!
    </div>
    <div className="punto-venta-eternal">
      <div className="eternal-logo">
        <img src={eternalSoulLogo} alt="Eternal Soul Tattoo Studio logo" />
      </div>
      <div className="eternal-direccion">
        <strong>Eternal Soul Tattoo Studio</strong><br />
        Montevideo Etorbidea, 23<br />
        48200 Durango<br />
        Vizcaya<br />
        <br />
        944 66 85 83
      </div>
    </div>

  </div>
)

export default PuntoVenta
