import React from "react"
import MerchanCarrusel from "./MerchanCarrusel"
import TablaPreciosTallas from "./TablaPreciosTallas"
import PuntoVenta from "./PuntoVenta"

const MerchanContenido = () => (
  <div className="contenido merchan-contenido">
    <MerchanCarrusel />
    <TablaPreciosTallas />
    <PuntoVenta />
  </div>
)

export default MerchanContenido
