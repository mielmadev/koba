import React from "react"
import "./encabezado.scss"
import LogoKoba from "@imagenes/logos/logo-koba.png"
import Eslogan from "./Eslogan.jsx"
import Navegador from "./Navegador.jsx"

const Encabezado = () => {
  return (
    <header className="encabezado__contenedor">
      <div className="encabezado__logo">
        <img src={LogoKoba} alt="Logo Koba" className="encabezado__logo-img" />
      </div>
      <div className="encabezado__derecha">
        <div className="encabezado__derecha-navegador">
          <Navegador />
        </div>
        <div className="encabezado__derecha-eslogan">
          <Eslogan />
        </div>
      </div>
    </header>
  )
}

export default Encabezado
