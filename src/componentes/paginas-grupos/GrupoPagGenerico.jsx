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
import onslaughtFondo from "../../assets/imagenes/fondos/onslaughtFondo.webp"

import SpotifyIframe from "../contenido-grupos/SpotifyIframe"
import bandasDatos2025 from "../contenido-grupos/bandasDatos2025"

// Este componente genérico muestra el fondo y el contenido del grupo según la ruta
const fondos = {
  asgarth: asgarthFondo,
  beforethedawn: beforethedawnFondo,
  eclipse: eclipseFondo,
  ehunkilo: ehunkiloFondo,
  moonshinerds: moonshinerdsFondo,
  theelectricalley: theElectricAlleyFondo,
  wolfheart: wolfheartFondo,
  onslaught: onslaughtFondo
}

export default function GrupoPagGenerico() {
  const { nombreBanda } = useParams()
  const fondo = fondos[nombreBanda?.toLowerCase()] || null
  // Buscar la banda en bandasDatos2025
  const normalizar = (str) => str.trim().toLowerCase().replace(/\s+/g, "")
  const banda = bandasDatos2025.find((b) => normalizar(b.nombre) === normalizar(nombreBanda))
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        {fondo && <img src={fondo} alt={nombreBanda + " Fondo"} />}
      </div>
      <div className="contenido-pag">
        <GrupoContenido nombreBanda={nombreBanda} />
        {/* El iframe de Spotify debe ir al final de la página y fijado abajo */}
        {banda?.spotify && <SpotifyIframe spotify={banda.spotify} nombre={banda.nombre} />}
      </div>
    </div>
  )
}
