import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./PuaGirando.scss"
import puaImg from "@cursor/KobaPua_32x32_Blanco.png"

/**
 * Componente reutilizable de pua giratoria animada
 * @param {boolean} girada - Si true, muestra animación de abrir; si false, de cerrar
 * @param {number} size - Tamaño en px (opcional, por defecto 30)
 * @param {string} className - Clases extra opcionales
 */
const PuaGirando = ({ girada, cerrando: cerrandoProp = false, size = 30, className = "" }) => {
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

  return (
    <span
      className={`pua-girando ${estado} ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <img src={puaImg} alt="Pua animada" width={size} height={size} draggable={false} />
    </span>
  )
}

PuaGirando.propTypes = {
  girada: PropTypes.bool.isRequired,
  cerrando: PropTypes.bool,
  size: PropTypes.number,
  className: PropTypes.string,
}

export default PuaGirando
