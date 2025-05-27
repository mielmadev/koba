import React from "react"
import { Link } from "react-router-dom"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import Fecha from "../../fecha/fecha"
import "./KobaIVContenido.scss"

// Orden por importancia (headliner primero, luego co-headliners, luego resto)
const bandasCartel2025 = [
  { ...bandasDatos2025.find((b) => b.nombre === "Eclipse"), nivel: 1 },
  { ...bandasDatos2025.find((b) => b.nombre === "Wolfheart"), nivel: 2 },
  { ...bandasDatos2025.find((b) => b.nombre === "Before The Dawn"), nivel: 3 },
  { ...bandasDatos2025.find((b) => b.nombre === "Ehun Kilo"), nivel: 3 },
  { ...bandasDatos2025.find((b) => b.nombre === "Asgarth"), nivel: 3 },
  { ...bandasDatos2025.find((b) => b.nombre === "Moonshinerds"), nivel: 4 },
  { ...bandasDatos2025.find((b) => b.nombre === "The Electric Alley"), nivel: 4 },
]

// Componente reutilizable para renderizar bandas por nivel
const BandasNivel = ({ bandas, nivel }) => {
  if (!bandas.length) return null;
  return (
    <div className={`nivel nivel-${nivel}`}>
      {bandas.map(({ nombre, imagen }) => (
        imagen ? (
          <div key={nombre} className="banda-contenedor" data-nombre={nombre}>
            <Link
              to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
              tabIndex={0}
              aria-label={`Ver página de ${nombre}`}
              className="banda-link"
            >
              <img src={imagen} alt={nombre} loading="lazy" className="banda-imagen" />
            </Link>
          </div>
        ) : null
      ))}
    </div>
  );
}

const KobaIVContenido = () => {
  // Agrupar bandas por nivel
  const niveles = [1, 2, 3, 4]
  const bandasPorNivel = niveles.map(nivel => ({
    nivel,
    bandas: bandasCartel2025.filter(b => b.nivel === nivel)
  }))

  return (
    <div className="koba-iv-contenido">
      <Fecha />
      <div className="cartel-koba">
        {bandasPorNivel.map(({ nivel, bandas }) => (
          <div key={nivel} className={`nivel nivel-${nivel}`}>
            {bandas.map(({ nombre, imagen }) => (
              imagen ? (
                <div key={nombre} className="banda-contenedor" data-nombre={nombre}>
                  <Link
                    to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
                    tabIndex={0}
                    aria-label={`Ver página de ${nombre}`}
                    className="banda-link"
                  >
                    <img src={imagen} alt={nombre} loading="lazy" className="banda-imagen" />
                  </Link>
                </div>
              ) : null
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default KobaIVContenido
