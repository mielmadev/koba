import React from "react"
import { NavLink } from "react-router-dom"
import "./MenuDesplegable.scss"

// Componente para el menu desplegable del navegador
const MenuDesplegable = ({ abierto, closeMenu, pages }) => (
  <div className={`menu-desplegable${abierto ? " menu-desplegable--abierto" : ""}`}>
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

export default MenuDesplegable
