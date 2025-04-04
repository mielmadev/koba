import React from 'react'
import './inicio-pag.scss'
import Encabezado from '../encabezado-pie/encabezado'


export default function InicioPagina() {
  return (
    <div className="inicio-container">
      <Encabezado />
<div className="contenido-inicio">
      <h1>pagina de inicio, </h1>
      <h2> elemento pie página</h2>
      </div>
      </div>
  )
}