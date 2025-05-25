import React from "react"
import BandasLista2025 from "./BandasLista2025"
import BandasBanner from "./BandasBanner"
import "./bandasContenido.scss"

const BandasContenido = () => {
  return (
    <div className="contenido">
      <div className="bandas-banner-contenedor">
        <BandasBanner />
      </div>
      <div className="bandasLista">
        <BandasLista2025 />
      </div>
    </div>
  )
}

export default BandasContenido
