import React from "react"
import { Link } from "react-router-dom"
import Fecha from "../../fecha/fecha"
import "./KobaIVContenido.scss"
import { bandasLogo } from "@imagenes/imagenes.js"

// Datos de bandas para el cartel, con imagen y link explícitos
const bandasCartel = [
  { nombre: "Eclipse", imagen: bandasLogo.eclipseLogo, link: "/bandas/eclipse" },
  { nombre: "Wolfheart", imagen: bandasLogo.wolfheartLogo, link: "/bandas/wolfheart" },
  { nombre: "Before The Dawn", imagen: bandasLogo.beforeTheDawnLogo, link: "/bandas/beforethedawn" },
  { nombre: "Ehun Kilo", imagen: bandasLogo.ehunKiloLogo, link: "/bandas/ehunkilo" },
  { nombre: "Asgarth", imagen: bandasLogo.asgarthLogo, link: "/bandas/asgarth" },
  { nombre: "The Electric Alley", imagen: bandasLogo.theElectricAlleyLogo, link: "/bandas/theelectricalley" },
  { nombre: "Moonshinerds", imagen: bandasLogo.moonshinerdsLogo, link: "/bandas/moonshinerds" },
]

// Componente reutilizable para mostrar una banda por nombre
const Banda = ({ nombre, imagen, link }) => (
  <div className="banda-contenedor" data-nombre={nombre}>
    <Link
      to={link}
      tabIndex={0}
      aria-label={`Ver página de ${nombre}`}
      className="banda-link"
    >
      <img src={imagen} alt={nombre} loading="lazy" className="banda-imagen" />
    </Link>
  </div>
)

const KobaIVContenido = () => {
  return (
    <div className="koba-iv-contenido">
      <Fecha />
      <div className="cartel-koba">
        <div className="nivel-1">
          <Banda {...bandasCartel[0]} />
        </div>
        <div className="nivel-2">
          <Banda {...bandasCartel[1]} />
          <Banda {...bandasCartel[2]} />
        </div>
        <div className="nivel-3">
          <Banda {...bandasCartel[3]} />
          <Banda {...bandasCartel[4]} />
        </div>
        <div className="nivel-4">
          <Banda {...bandasCartel[5]} />
          <Banda {...bandasCartel[6]} />
        </div>
      </div>
    </div>
  )
}

export default KobaIVContenido
