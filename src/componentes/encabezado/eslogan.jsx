import React from "react"
import "./Eslogan.scss"
import BotonEntradas from "../utils/BotonEntradas"

const Eslogan = () => {
  return <div className="eslogan-contenedor">
    <div className="eslogan">Where Metal Comes True</div>
    <div className="entradas">
      <BotonEntradas href="#entradas">Entradas</BotonEntradas>
    </div>
  </div>
}

export default Eslogan
