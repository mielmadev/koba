import React from "react"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import BandasImagenesMapeo from "@mapeos/BandasImagenesMapeo"
import "./anio2025Contenido.scss"

// Orden por importancia (headliner primero, luego co-headliners, luego resto)
const bandasCartel2025 = [
  { ...bandasDatos2025.find(b => b.nombre === "Before The Dawn"), nivel: 2 }, // Co-headliner
  { ...bandasDatos2025.find(b => b.nombre === "Wolfheart "), nivel: 2 }, // Co-headliner
  { ...bandasDatos2025.find(b => b.nombre === "Eclipse"), nivel: 2 }, // Co-headliner
  { ...bandasDatos2025.find(b => b.nombre === "Asgarth"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "The Electric Alley"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "Moonshinerds"), nivel: 3 },
  { ...bandasDatos2025.find(b => b.nombre === "Ehun Kilo"), nivel: 3 },
]

const Contenido2025 = () => {
  return (
    <div className="contenido-2025 cartel-festival">
      <BandasImagenesMapeo bandas={bandasCartel2025} />
    </div>
  )
}

export default Contenido2025
