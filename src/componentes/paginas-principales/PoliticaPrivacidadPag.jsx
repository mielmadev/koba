import React from "react"
import PaginaGenerica from "./PaginaGenerica.jsx"
import MielmaDevAlas from "@imagenes/MielmaDev/MielmaDevAlas.webp"
import PoliticaPrivacidad from "../paginas-pie/PoliticaPrivacidad"

const PoliticaPrivacidadPag = () => (
  <PaginaGenerica Fondo={MielmaDevAlas} fondoAlt="Mielma Fondo" claseFondo="mielma-fondo">
    <PoliticaPrivacidad />
  </PaginaGenerica>
)

export default PoliticaPrivacidadPag
