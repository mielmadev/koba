import React from "react"

const BandasImagenesMapeo = ({ bandas }) => (
  <>
    {bandas.map(({ nombre, imagen, nivel }) => (
      <div key={nombre} className={`banda-imagen banda-nivel-${nivel || 3}`}>
        {imagen && <img src={imagen} alt={nombre} loading="lazy" />}
      </div>
    ))}
  </>
)

export default BandasImagenesMapeo
