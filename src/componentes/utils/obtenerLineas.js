// Renombrar este archivo a .jsx si usas JSX en su interior
import React from "react"
// Convierte saltos de línea (\n o \n\n) en saltos visuales para textos planos
export default function obtenerLineas(texto) {
  if (!texto) return null
  // Soporta tanto saltos simples como dobles
  return texto.split(/\n+/).map((linea, i) => (
    <React.Fragment key={i}>
      {linea}
      {i < texto.split(/\n+/).length - 1 && <br />}
    </React.Fragment>
  ))
}
