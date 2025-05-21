import React from "react"
import "./aboutDatosLista.scss"
import { aboutDatos } from "@datos/aboutDatos"

export default function AboutDatosLista() {
  // Divide el subtitulo1 en líneas y aplica la clase de alineación
  const lineasSubtitulo1 = aboutDatos.subtitulo1.split("\n")

  return (
    <div className="about-datos-lista">
      <div className="about-titulo">{aboutDatos.titulo}</div>

      {lineasSubtitulo1.map((linea, i) => (
        <div
          key={i}
          className={`about-subtitulo about-subtitulo-linea-${i === 0 ? "izq" : "der"
            }`}
        >
          {linea}
        </div>
      ))}


      <div className="about-texto">{aboutDatos.texto1}</div>

      <div className="about-seccion">{aboutDatos.seccion1}</div>

      <div className="about-texto">{aboutDatos.texto2}</div>

      <div className="about-seccion">{aboutDatos.promesa}</div>

      <div className="about-texto">{aboutDatos.texto3}</div>

      <div className="about-seccion">{aboutDatos.pregunta}</div>

      <div className="about-subtitulo">{aboutDatos.subtitulo2}</div>

      <div className="about-seccion">{aboutDatos.seccion2}</div>
    </div>
  )
}
