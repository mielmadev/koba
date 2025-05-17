import React from "react"
import { NavLink } from "react-router-dom"
import "./navegador.scss"

// Componente para el menu desplegable del navegador
const NavegadorDesplegable = ({ abierto, closeMenu, pages }) => (
  <div className={`navegador-contenedor${abierto ? " abierto" : ""}`}>
    {pages.map(({ path, label }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
        onClick={closeMenu}
      >
        {label}
      </NavLink>
    ))}
  </div>
)

export default NavegadorDesplegable
