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
  { ...bandasDatos2025.find((b) => b.nombre === "The Electric Alley"), nivel: 4 },
  { ...bandasDatos2025.find((b) => b.nombre === "Moonshinerds"), nivel: 4 }
]

const KobaIVContenido = () => {
  // Agrupar bandas por nivel
  const nivel1 = bandasCartel2025.filter(b => b.nivel === 1)
  const nivel2 = bandasCartel2025.filter(b => b.nivel === 2)
  const nivel3 = bandasCartel2025.filter(b => b.nivel === 3)
  const nivel4 = bandasCartel2025.filter(b => b.nivel === 4)

  return (
    <div className="koba-iv-contenido">
      <Fecha />
      <div className="cartel-koba">
        {/* Nivel 1 */}
        {nivel1.length > 0 && (
          <div className="nivel nivel-1">
            {nivel1.map(({ nombre, imagen }) => (
              <div key={nombre} className="banda-imagen">
                {imagen && (
                  <Link
                    to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
                    tabIndex={0}
                    aria-label={`Ver página de ${nombre}`}
                  >
                    <img src={imagen} alt={nombre} loading="lazy" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Nivel 2 */}
        {nivel2.length > 0 && (
          <div className="nivel nivel-2">
            {nivel2.map(({ nombre, imagen }) => (
              <div key={nombre} className="banda-imagen">
                {imagen && (
                  <Link
                    to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
                    tabIndex={0}
                    aria-label={`Ver página de ${nombre}`}
                  >
                    <img src={imagen} alt={nombre} loading="lazy" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Nivel 3: todos iguales */}
        {nivel3.length > 0 && (
          <div className="nivel nivel-3">
            {nivel3.map(({ nombre, imagen }) => (
              <div key={nombre} className="banda-imagen">
                {imagen && (
                  <Link
                    to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
                    tabIndex={0}
                    aria-label={`Ver página de ${nombre}`}
                  >
                    <img src={imagen} alt={nombre} loading="lazy" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Nivel 4 */}
        {nivel4.length > 0 && (
          <div className="nivel nivel-4">
            {nivel4.map(({ nombre, imagen }) => (
              <div key={nombre} className="banda-imagen">
                {imagen && (
                  <Link
                    to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
                    tabIndex={0}
                    aria-label={`Ver página de ${nombre}`}
                  >
                    <img src={imagen} alt={nombre} loading="lazy" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default KobaIVContenido
