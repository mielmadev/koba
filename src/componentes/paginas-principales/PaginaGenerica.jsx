 
import React from "react"
import Pie from "../pie/Pie"

export default function PaginaGenerica({ Fondo, fondoAlt, claseFondo, children }) {
  return (
    <div className="contenedor-pag">
      <div className={claseFondo}>
        <img src={Fondo} alt={fondoAlt} />
      </div>
      <div className="contenido-pag">{children}
        <Pie />
</div>
    </div>
  )
}
