import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import "./MenuDesplegable.scss"
import LogoKoba from "@imagenes/logos/LogoKoba.png"

// Definir el shape de pages fuera para reutilización y limpieza
const pageShape = PropTypes.shape({
  path: PropTypes.string.isRequired, // Ruta a la que navega el enlace
  label: PropTypes.string.isRequired // Texto que se muestra en el enlace
})

// Componente para el menu desplegable del navegador
const MenuDesplegable = ({ abierto, closeMenu, pages }) => {
  // Estado para animación de cierre
  const [cerrando, setCerrando] = useState(false)
  const [visible, setVisible] = useState(abierto)
  const abiertoPrevio = useRef(abierto) // antes prevAbierto
  const refTemporizador = useRef() // antes timeoutRef

  // Efecto para manejar la animación de apertura/cierre y limpiar el timeout
  useEffect(() => {
    if (abierto) {
      setVisible(true)
      setCerrando(false)
    } else if (abiertoPrevio.current) {
      setCerrando(true)
      refTemporizador.current = setTimeout(() => {
        setCerrando(false)
        setVisible(false)
      }, 400) // 400ms = duración de la animación de cierre
    }
    abiertoPrevio.current = abierto
    // Limpiar solo si hay un timeout activo
    return () => {
      if (refTemporizador.current) clearTimeout(refTemporizador.current)
    }
  }, [abierto])

  // Clases dinámicas para el menú según estado
  const menuClass = [
    "menu-desplegable",
    abierto && "menu-desplegable--abierto",
    cerrando && "menu-desplegable--cerrando"
  ]
    .filter(Boolean)
    .join(" ")

  // No es necesario memoizar handleCloseMenu si solo se pasa a un hijo
  const handleCloseMenu = () => {
    closeMenu()
  }

  // Si el menú no está visible ni cerrando, no renderizar nada
  if (!visible && !cerrando) return null

  return (
    <div
      className={menuClass}
      role="navigation"
      aria-label="Menú principal"
      tabIndex={-1} // Mejora accesibilidad para navegación por teclado
    >
      <div className="menu-desplegable__logo">
        <img src={LogoKoba} alt="Koba Live" />
      </div>
      {/* Renderizar los enlaces del menú */}
      {pages.map(({ path, label }) => (
        <div className="menu-desplegable__item" key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "menu-desplegable__link menu-desplegable__link--active"
                : "menu-desplegable__link"
            }
            onClick={handleCloseMenu}
          >
            {label}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

// Definición de los tipos de props que espera el componente MenuDesplegable
MenuDesplegable.propTypes = {
  abierto: PropTypes.bool.isRequired, // Indica si el menú está visible (true) o no (false)
  closeMenu: PropTypes.func.isRequired, // Función que se ejecuta para cerrar el menú
  pages: PropTypes.arrayOf(pageShape).isRequired // Array de objetos con la ruta y el texto de cada enlace del menú
}

export default MenuDesplegable
