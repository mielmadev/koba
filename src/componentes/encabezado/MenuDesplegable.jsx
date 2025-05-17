import React, { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import "./MenuDesplegable.scss"
import LogoKoba from "../../assets/imagenes/logos/LogoKoba.png"

// Componente para el menu desplegable del navegador
const MenuDesplegable = ({ abierto, closeMenu, pages }) => {
  // Estado para animación de cierre
  const [cerrando, setCerrando] = useState(false)
  const [visible, setVisible] = useState(abierto)
  const prevAbierto = useRef(abierto)
  const timeoutRef = useRef()

  useEffect(() => {
    if (abierto) {
      setVisible(true)
      setCerrando(false)
    } else if (prevAbierto.current) {
      setCerrando(true)
      timeoutRef.current = setTimeout(() => {
        setCerrando(false)
        setVisible(false)
      }, 400) // 400ms = duración de la animación de cierre
    }
    prevAbierto.current = abierto
    return () => clearTimeout(timeoutRef.current)
  }, [abierto])

  if (!visible && !cerrando) return null

  return (
    <div
      className={`menu-desplegable${abierto ? " menu-desplegable--abierto" : ""}${cerrando ? " menu-desplegable--cerrando" : ""}`}
    >
      <div className="menu-desplegable__logo" style={{ display: 'flex', alignItems: 'center', margin: '1rem 2rem 1rem 1rem' }}>
        <img src={LogoKoba} alt="Koba Live" style={{ height: '48px', width: 'auto', display: 'block' }} />
      </div>
      {pages.map(({ path, label }) => (
        <div className="menu-desplegable__item" key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "menu-desplegable__link menu-desplegable__link--active"
                : "menu-desplegable__link"
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default MenuDesplegable
