import React from "react"
import "./hamburguesa.scss"

const Hamburguesa = ({ abierto, onClick }) => (
  <button
    className={`hamburguesa${abierto ? " abierto" : ""}`}
    onClick={onClick}
    aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
  >
    <span className="minipua" />
  </button>
)

export default Hamburguesa
