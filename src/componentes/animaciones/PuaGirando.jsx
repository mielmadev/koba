import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./PuaGirando.scss"
import puaImgBlanca from "@cursor/KobaPua_32x32_Blanco.png"
import puaImgMarron from "@cursor/KobaPua_32x32_Marron.png"

/**
 * Componente reutilizable de pua giratoria animada
 * @param {boolean} girada - Si true, muestra animación de abrir; si false, de cerrar
 * @param {number} size - Tamaño en px (opcional, por defecto 30)
 * @param {string} className - Clases extra opcionales
 */
const PuaGirando = ({ girada, cerrando: cerrandoProp = false, size = "1em", tamano, className = "" }) => {
  const [cerrando, setCerrando] = useState(false)
  const prevGirada = useRef(girada)
  const timeoutRef = useRef()

  useEffect(() => {
    if (cerrandoProp) {
      setCerrando(true)
      timeoutRef.current = setTimeout(() => setCerrando(false), 500)
    } else if (prevGirada.current && !girada) {
      setCerrando(true)
      timeoutRef.current = setTimeout(() => setCerrando(false), 500)
    }
    prevGirada.current = girada
    return () => clearTimeout(timeoutRef.current)
  }, [girada, cerrandoProp])

  let estado = ""
  if (girada) estado = "pua-girando--abierta"
  else if (cerrando) estado = "pua-girando--cerrando"
  else estado = "pua-girando--cerrada"

  // Si se pasa la prop 'tamano', tiene prioridad sobre 'size'
  const realSize = tamano ? `${tamano}px` : size;

  let puaImgActual = puaImgBlanca;
  if (estado === "pua-girando--abierta" || estado === "pua-girando--cerrando") {
    puaImgActual = puaImgMarron;
  }

  return (
    <span
      className={`pua-girando ${estado} ${className}`.trim()}
      style={{ width: realSize, height: realSize, display: "inline-flex", alignItems: "center" }}
    >
      <img src={puaImgActual} alt="Pua animada" style={{ width: "100%", height: "100%", objectFit: "contain" }} draggable={false} />
    </span>
  )
}

PuaGirando.propTypes = {
  girada: PropTypes.bool.isRequired,
  cerrando: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tamano: PropTypes.number,
  className: PropTypes.string
}

export default PuaGirando
