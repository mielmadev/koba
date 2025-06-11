import React from "react"
import PropTypes from "prop-types"
import "../contenido-paginas/faq-contenido/FaqContenido.scss"
import "./botonEntradas.scss"

/**
 * Botón reutilizable para la compra de entradas.
 * Permite añadir clases y estilos personalizados.
 */
const BotonEntradas = ({ children = "Comprar entradas", className = "", style = {}, ...props }) => {
  return (
    <a href="#" className={`enlace-comprar-entradas ${className}`.trim()} style={style} {...props}>
      {children}
    </a>
  )
}

BotonEntradas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BotonEntradas
