// Componente fallback: muestra una imagen o mensaje de carga mientras se resuelve un proceso (por ejemplo, carga de datos o recursos)
import React from "react"
import Pua from "@imagenes/pua/KobaPua_300x300.png"
import "./Fallback.scss"

function Fallback() {
  return (
    <div className="fallback-container">
      {Pua ? (
        <img src={Pua} alt="Cargando..." className="fallback-image" />
      ) : (
        <p>Cargando...</p> // Mensaje alternativo si la imagen no se carga
      )}
    </div>
  )
}

export default Fallback
