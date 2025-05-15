import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import PAGES_LAZY from "@AppComponentes/PagesLazy"
import Hamburguesa from "./Hamburguesa"
import NavegadorDesplegable from "./NavegadorDesplegable"
import "./navegador.scss"

const Navegador = () => {
  const [abierto, setAbierto] = useState(false)

  const toggleMenu = () => setAbierto(!abierto)
  const closeMenu = () => setAbierto(false)

  return (
    <nav>
      <Hamburguesa abierto={abierto} onClick={toggleMenu} />
      <NavegadorDesplegable abierto={abierto} closeMenu={closeMenu} pages={PAGES_LAZY} />
    </nav>
  )
}

export default Navegador
