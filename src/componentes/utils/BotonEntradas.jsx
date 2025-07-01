import React from "react"
import PropTypes from "prop-types"
import "../contenido-paginas/faq-contenido/faqContenido.scss"
import "./botonEntradas.scss"

/**
 * Botón reutilizable para la compra de entradas.
 * Permite añadir clases y estilos personalizados.
 */
const BotonEntradas = ({ children = "Comprar entradas", className = "", style = {}, ...props }) => {
  // Elimina el foco tras hacer click para evitar que se quede girado
  const handleMouseUp = (e) => {
    e.currentTarget.blur();
  };
  return (
    <a
      href="#"
      className={`enlace-comprar-entradas ${className}`.trim()}
      style={style}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </a>
  );
}

BotonEntradas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BotonEntradas
