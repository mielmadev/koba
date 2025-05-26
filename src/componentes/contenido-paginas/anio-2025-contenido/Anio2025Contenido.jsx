import React from "react"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
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
  return (
    <div className="contenido-2025">
      {bandasCartel2025.map(({ nombre, imagen }) => (
        <div key={nombre} className="banda-imagen">
          {imagen && (
            <a href={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`}
              tabIndex={0}
              aria-label={`Ver página de ${nombre}`}
            >
              <img src={imagen} alt={nombre} loading="lazy" />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Contenido2025
