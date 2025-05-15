import React from "react"
import "./Encabezado.scss"
import LogoKoba from "@imagenes/logos/logoKoba.png"
import Eslogan from "./Eslogan.jsx"
import Navegador from "./Navegador.jsx"

const Encabezado = () => {
  return (
    <header className="EncabezadoContenedor">
      <div className="LogoEncabezado">
        <img src={LogoKoba} alt="Logo Koba" className="logo-img" />
      </div>
      <div className="EncabezadoDerecha">
        <div className="EncabezadoNavegador">
          <Navegador />
        </div>
        <div className="EncabezadoEslogan">
          <Eslogan />
        </div>
      </div>
    </header>
  )
}

export default Encabezado
