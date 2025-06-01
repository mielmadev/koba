import React from "react"
import { Link } from "react-router-dom"
import Fecha from "../../fecha/fecha"
import "./KobaIVContenido.scss"
import { bandasLogo } from "@imagenes/imagenes"
import BannerInfoInteractivo from "./BannerInfoInteractivo"

// Datos de bandas para el cartel, con imagen y link explícitos
const bandasCartel = [
  { nombre: "Eclipse", imagen: bandasLogo.eclipseLogo, link: "/bandas/eclipse" },
  { nombre: "Wolfheart", imagen: bandasLogo.wolfheartLogo, link: "/bandas/wolfheart" },
  { nombre: "Asgarth", imagen: bandasLogo.asgarthLogo, link: "/bandas/asgarth" },
  { nombre: "Ehun Kilo", imagen: bandasLogo.ehunKiloLogo, link: "/bandas/ehunkilo" },
  { nombre: "Before The Dawn", imagen: bandasLogo.beforeTheDawnLogo, link: "/bandas/beforethedawn" },
  { nombre: "The Electric Alley", imagen: bandasLogo.theElectricAlleyLogo, link: "/bandas/theelectricalley" },
  { nombre: "Moonshinerds", imagen: bandasLogo.moonshinerdsLogo, link: "/bandas/moonshinerds" }
];

function getBanda(nombre) {
  return bandasCartel.find(b => b.nombre === nombre);
}

const KobaIVContenido = () => {
  return (
    <div className="koba-iv-contenido">
      <Fecha />
      <BannerInfoInteractivo />
      <div className="cartel-koba">
        <div className="nivel-1">
          <div className="banda-contenedor" data-nombre="Eclipse">
            <Link to={getBanda("Eclipse").link} tabIndex={0} aria-label="Ver página de Eclipse" className="banda-link">
              <img src={getBanda("Eclipse").imagen} alt="Eclipse" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
        </div>
        <div className="nivel-2">
          <div className="banda-contenedor" data-nombre="Wolfheart">
            <Link to={getBanda("Wolfheart").link} tabIndex={0} aria-label="Ver página de Wolfheart" className="banda-link">
              <img src={getBanda("Wolfheart").imagen} alt="Wolfheart" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
        </div>
        <div className="nivel-3">
          <div className="banda-contenedor" data-nombre="Asgarth">
            <Link to={getBanda("Asgarth").link} tabIndex={0} aria-label="Ver página de Asgarth" className="banda-link">
              <img src={getBanda("Asgarth").imagen} alt="Asgarth" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
          <div className="banda-contenedor" data-nombre="Ehun Kilo">
            <Link to={getBanda("Ehun Kilo").link} tabIndex={0} aria-label="Ver página de Ehun Kilo" className="banda-link">
              <img src={getBanda("Ehun Kilo").imagen} alt="Ehun Kilo" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
          <div className="banda-contenedor" data-nombre="Before The Dawn">
            <Link to={getBanda("Before The Dawn").link} tabIndex={0} aria-label="Ver página de Before The Dawn" className="banda-link">
              <img src={getBanda("Before The Dawn").imagen} alt="Before The Dawn" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
        </div>
        <div className="nivel-4">
          <div className="banda-contenedor" data-nombre="The Electric Alley">
            <Link to={getBanda("The Electric Alley").link} tabIndex={0} aria-label="Ver página de The Electric Alley" className="banda-link">
              <img src={getBanda("The Electric Alley").imagen} alt="The Electric Alley" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
          <div className="banda-contenedor" data-nombre="Moonshinerds">
            <Link to={getBanda("Moonshinerds").link} tabIndex={0} aria-label="Ver página de Moonshinerds" className="banda-link">
              <img src={getBanda("Moonshinerds").imagen} alt="Moonshinerds" loading="lazy" className="banda-imagen" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KobaIVContenido
