import React, { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import PAGES_LAZY from "@AppComponentes/PagesLazy"
import Hamburguesa from "./Hamburguesa"
import MenuDesplegable from "./MenuDesplegable"
import "./navegador.scss"

const Navegador = () => {
  const [abierto, setAbierto] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => setAbierto(!abierto)
  const closeMenu = () => setAbierto(false)

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (!abierto) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setAbierto(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [abierto])

  // Cerrar menú hamburguesa si el ancho supera el breakpoint tablet
  useEffect(() => {
    if (!abierto) return
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setAbierto(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [abierto])

  return (
    <nav ref={navRef}>
      <div className="menu-escritorio">
        {PAGES_LAZY.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "menu-escritorio__link menu-escritorio__link--active"
                : "menu-escritorio__link"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Hamburguesa abierto={abierto} onClick={toggleMenu} />
      <MenuDesplegable abierto={abierto} closeMenu={closeMenu} pages={PAGES_LAZY} />
    </nav>
  )
}

export default Navegador
