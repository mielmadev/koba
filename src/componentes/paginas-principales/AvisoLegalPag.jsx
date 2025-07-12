import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import MielmaDevAlas from "@imagenes/MielmaDev/MielmaDevAlas.webp"
import AvisoLegal from "../paginas-pie/AvisoLegal"

const AvisoLegalPag = () => (
  <PaginaGenerica Fondo={MielmaDevAlas} fondoAlt="Mielma Fondo" claseFondo="mielma-fondo">
    <AvisoLegal />
  </PaginaGenerica>
)

export default AvisoLegalPag
