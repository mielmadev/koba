import React from "react"

export default function PaginaGenerica({ Fondo, fondoAlt, claseFondo, children }) {
  return (
    <div className="contenedor-pag">
      <div className={claseFondo}>
        <img src={Fondo} alt={fondoAlt} />
      </div>
      <div className="contenido-pag">{children}</div>
    </div>
  )
}
