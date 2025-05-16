import React from "react"
import { NavLink } from "react-router-dom"
import "./MenuDesplegable.scss"

// Componente para el menú desplegable del navegador
const MenuDesplegable = ({ abierto, closeMenu, pages }) => (
  <div className={`menuDesplegable${abierto ? " menuDesplegable--abierto" : ""}`}>
    {pages.map(({ path, label }) => (
      <div className="menuDesplegable__item" key={path}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? "menuDesplegable__link menuDesplegable__link--active"
              : "menuDesplegable__link"
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
