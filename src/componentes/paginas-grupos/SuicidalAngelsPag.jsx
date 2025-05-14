import React from "react"
import SuicidalAngelsContenido from "@contenido-grupos/SuicidalAngelsContenido"
import SuicidalAngelsFondo from "@imagenes/fondos/suicidalAngelsFondo.webp"

export default function SuicidalAngelsPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={SuicidalAngelsFondo} alt="Suicidal Angels Fondo" />
      </div>
      <div className="contenido-pag">
        <SuicidalAngelsContenido />
      </div>
    </div>
  )
}
