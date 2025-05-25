import React from "react"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import BandasImagenesMapeo from "@mapeos/BandasImagenesMapeo"
import "./anio2025Contenido.scss"

// Orden por importancia (headliner primero, luego co-headliners, luego resto)
const bandasCartel2025 = [
  { ...bandasDatos2025.find(b => b.nombre === "Eclipse"), nivel: 1 },
  { ...bandasDatos2025.find(b => b.nombre === "Wolfheart "), nivel: 2 },
  { ...bandasDatos2025.find(b => b.nombre === "Before The Dawn"), nivel: 2 },
  { ...bandasDatos2025.find(b => b.nombre === "Ehun Kilo"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "Asgarth"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "The Electric Alley"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "Moonshinerds"), nivel: 3 },
]

const Contenido2025 = () => {
  // Separar bandas por nivel
  const nivel1 = bandasCartel2025.filter(b => b.nivel === 1)
  const nivel2 = bandasCartel2025.filter(b => b.nivel === 2)
  const nivel3 = bandasCartel2025.filter(b => b.nivel === 3)

  return (
    <div className="contenido-2025 cartel-festival">
      {/* Headliner (nivel 1) en una sola línea, destacado */}
      <div className="cartel-nivel cartel-nivel-1">
        <BandasImagenesMapeo bandas={nivel1} />
      </div>
      {/* Co-headliners (nivel 2) */}
      <div className="cartel-nivel cartel-nivel-2">
        <BandasImagenesMapeo bandas={nivel2} />
      </div>
      {/* Resto de bandas (nivel 3) */}
      <div className="cartel-nivel cartel-nivel-3">
        <BandasImagenesMapeo bandas={nivel3} />
      </div>
    </div>
  )
}

export default Contenido2025
