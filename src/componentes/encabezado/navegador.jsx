import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import PAGES_LAZY from "@AppComponentes/PagesLazy"
import Hamburguesa from "./Hamburguesa"
import MenuDesplegable from "./MenuDesplegable"
import "./navegador.scss"

const Navegador = () => {
  const [abierto, setAbierto] = useState(false)

  const toggleMenu = () => setAbierto(!abierto)
  const closeMenu = () => setAbierto(false)

  return (
    <nav>
      <Hamburguesa abierto={abierto} onClick={toggleMenu} />
      <MenuDesplegable abierto={abierto} closeMenu={closeMenu} pages={PAGES_LAZY} />
    </nav>
  )
}

export default Navegador
