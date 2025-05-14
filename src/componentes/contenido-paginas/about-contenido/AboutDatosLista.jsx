import React from "react"
import "./aboutDatosLista.scss"
import { aboutDatos } from "@datos/aboutDatos"

export default function AboutDatosLista() {
  return (
    <div className="about-datos-lista">
      <div className="about-titulo">{aboutDatos.titulo}</div>

      <div className="about-subtitulo">{aboutDatos.subtitulo1}</div>

      <div className="about-texto">{aboutDatos.texto1}</div>

      <div className="about-seccion">{aboutDatos.seccion1}</div>

      <div className="about-texto">{aboutDatos.texto2}</div>

      <div className="about-seccion">{aboutDatos.promesa}</div>

      <div className="about-texto">{aboutDatos.texto3}</div>

      <div className="about-seccion">{aboutDatos.pregunta}</div>

      <div className="about-subtitulo">{aboutDatos.subtitulo3}</div>
    </div>
  )
}
