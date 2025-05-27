import React from "react"
import { Link } from "react-router-dom"
import bandasDatos2025 from "@datos/bandasDatosAnio2025"
import Fecha from "../../fecha/fecha"
import "./KobaIVContenido.scss"

// Solo lista las bandas, sin niveles
const bandasCartel2025 = bandasDatos2025.filter(b => b.imagen)

const KobaIVContenido = () => {
  return (
    <div className="koba-iv-contenido">
      <Fecha />
      <div className="cartel-koba">
        {bandasCartel2025.map(({ nombre, imagen }) => (
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
        ))}
      </div>
    </div>
  )
}

export default KobaIVContenido
