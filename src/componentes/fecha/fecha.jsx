import React from "react"
import { fecha, ubicacion } from "@datos/fechaDatos"
import "./fecha.scss"
import MetalSeparadorIcono from "../iconos/MetalSeparadorIcono"
import EscudoSeparadorIcono from "../iconos/EscudoSeparadorIcono"

const Fecha = () => {
  return (
    <div className="fecha-contenedor">
      <div className="fecha">
        <span
          className="fecha-svg-separador"
          style={{ display: "inline-flex", alignItems: "center", margin: "0 0.5em" }}
        >
          <EscudoSeparadorIcono size={48} />
        </span>
        {fecha}
        <span
          className="fecha-svg-separador"
          style={{ display: "inline-flex", alignItems: "center", margin: "0 0.5em" }}
        >
          <MetalSeparadorIcono size={48} />
        </span>
        {ubicacion}
        <span
          className="fecha-svg-separador"
          style={{ display: "inline-flex", alignItems: "center", margin: "0 0.5em" }}
        >
          <EscudoSeparadorIcono size={48} />
        </span>
      </div>
    </div>
  )
}

export default Fecha
