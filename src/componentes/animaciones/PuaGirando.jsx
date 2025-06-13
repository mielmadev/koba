import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./puaGirando.scss"
import puaImgBlanca from "@imagenes/pua/pua-blanco.webp"
import puaImgMarron from "@imagenes/pua/pua-marron.webp"

/**
 * Componente reutilizable de pua giratoria animada
 * @param {boolean} girada - Si true, muestra animación de abrir; si false, de cerrar
 * @param {number} size - Tamaño en px (opcional, por defecto 30)
 * @param {string} className - Clases extra opcionales
 */
const PuaGirando = ({
  girada,
  cerrando: cerrandoProp = false,
  size = "1em",
  tamano,
  className = ""
}) => {
  const [cerrando, setCerrando] = useState(false)
  const prevGirada = useRef(girada)
  const timeoutRef = useRef()

  useEffect(() => {
    if (cerrandoProp || (prevGirada.current && !girada)) {
      setCerrando(true)
      timeoutRef.current = setTimeout(() => setCerrando(false), 500)
    }
    prevGirada.current = girada
    return () => clearTimeout(timeoutRef.current)
  }, [girada, cerrandoProp])

  const estado = girada
    ? "pua-girando--abierta"
    : cerrando
      ? "pua-girando--cerrando"
      : "pua-girando--cerrada"

  const realSize = tamano ? `${tamano}px` : size
  const puaImgActual =
    estado === "pua-girando--abierta"
      ? puaImgMarron
      : puaImgBlanca

  return (
    <span
      className={`pua-girando ${estado} ${className}`.trim()}
      style={{ width: realSize, height: realSize, display: "inline-flex", alignItems: "center" }}
    >
      <img
        src={puaImgActual}
        alt="Pua animada"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform:
            estado === "pua-girando--cerrada"
              ? "rotate(0deg)"
              : estado === "pua-girando--abierta"
                ? "rotate(180deg)"
                : estado === "pua-girando--cerrando"
                  ? "rotate(0deg)"
                  : undefined
        }}
        draggable={false}
      />
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
