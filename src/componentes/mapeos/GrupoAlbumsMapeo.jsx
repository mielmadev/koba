import React from "react"
import "./GrupoAlbumsMapeo.scss"
const GrupoAlbumsMapeo = ({ albums, className = "" }) => {
  const albumsOrdenados = [...albums].sort((a, b) => b.año - a.año)
  return (
    <div className={className}>
      {albumsOrdenados.map((album, index) => (
        <div key={index}>
          <span className="album-nombre">{album.nombre}</span> (
          <span className="album-año">{album.año}</span>)
        </div>
      ))}
    </div>
  )
}

export default GrupoAlbumsMapeo
