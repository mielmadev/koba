// Componente fallback: muestra una imagen o mensaje de carga mientras se resuelve un proceso (por ejemplo, carga de datos o recursos)
import React from "react"
import Pua from "@imagenes/pua/KobaPua_300x300.png"
import "./Fallback.scss"

function Fallback() {
  return (
    <div className="fallback-container">
      <img
        src={Pua}
        alt="Cargando..."
        className="fallback-image"
        onError={(e) => (e.target.style.display = "none")}
      />
      <noscript>
        <p>Cargando...</p>
      </noscript>
    </div>
  )
}

export default Fallback
