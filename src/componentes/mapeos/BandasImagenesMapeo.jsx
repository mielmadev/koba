import React from "react"
import { Link } from "react-router-dom"

const BandasImagenesMapeo = ({ bandas }) => (
  <>
    {bandas.map(({ nombre, imagen }) => (
      <div key={nombre} className="banda-imagen">
        {imagen && (
          <Link to={`/bandas/${nombre.toLowerCase().replace(/\s+/g, "")}`} tabIndex={0} aria-label={`Ver página de ${nombre}`}>
            <img src={imagen} alt={nombre} loading="lazy" />
          </Link>
        )}
      </div>
    ))}
  </>
)

export default BandasImagenesMapeo
