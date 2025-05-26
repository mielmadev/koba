import React from "react"
import { useParams } from "react-router-dom"
import GrupoContenido from "@contenido-grupos/GrupoContenido"
import asgarthFondo from "../../assets/imagenes/fondos/asgarthFondo.webp"
import beforethedawnFondo from "../../assets/imagenes/fondos/beforethedawnFondo.webp"
import eclipseFondo from "../../assets/imagenes/fondos/eclipseFondo.webp"
import ehunkiloFondo from "../../assets/imagenes/fondos/ehunkiloFondo.webp"
import moonshinerdsFondo from "../../assets/imagenes/fondos/moonshinerdsFondo.webp"
import theElectricAlleyFondo from "../../assets/imagenes/fondos/theElectricAlleyFondo.webp"
import wolfheartFondo from "../../assets/imagenes/fondos/wolfheartFondo.webp"
import suicidalAngelsFondo from "../../assets/imagenes/fondos/suicidalAngelsFondo.webp"

// Este componente genérico muestra el fondo y el contenido del grupo según la ruta
const fondos = {
  asgarth: asgarthFondo,
  beforethedawn: beforethedawnFondo,
  eclipse: eclipseFondo,
  ehunkilo: ehunkiloFondo,
  moonshinerds: moonshinerdsFondo,
  theelectricalley: theElectricAlleyFondo,
  wolfheart: wolfheartFondo,
  suicidalangels: suicidalAngelsFondo,
}

export default function GrupoPagGenerico() {
  const { nombreBanda } = useParams()
  const fondo = fondos[nombreBanda?.toLowerCase()] || null
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        {fondo && <img src={fondo} alt={nombreBanda + " Fondo"} />}
      </div>
      <div className="contenido-pag">
        <GrupoContenido nombreBanda={nombreBanda} />
      </div>
    </div>
  )
}
