import React from "react"
import "./aboutDatosLista.scss"
import { aboutDatos } from "@datos/aboutDatos"

function obtenerLineas(texto) {
  // Convierte los saltos de línea en <br /> para mostrar el texto con saltos
  if (!texto) return null
  return texto.split("\n").map((linea, i) => (
    <React.Fragment key={i}>
      {linea}
      {i < texto.split("\n").length - 1 && <br />}
    </React.Fragment>
  ))
}

function LineasAlternas({ lineas, claseBase, keyPrefix }) {
  // Añade console.log para depuración
  console.log("Lineas:", lineas)
  return lineas.map((linea, i) => {
    // Calcula la clase y muestra info para depuración
    const posicion = i % 2 === 0 ? "izq" : "der"
    const className = `${claseBase} ${claseBase}-linea-${posicion}`
    console.log(`Línea ${i}: "${linea}" -> Clase: "${className}"`)

    return (
      <div key={`${keyPrefix}-${i}`} className={className}>
        {linea}
      </div>
    )
  })
}

export default function AboutDatosLista() {
  return (
    <div className="about-datos-lista">
      <div className="about-titulo">{aboutDatos.titulo}</div>

      <LineasAlternas
        lineas={aboutDatos.subtitulo1.split("\n")}
        claseBase="about-subtitulo"
        keyPrefix="subtitulo"
      />
      <div className="about-texto">{obtenerLineas(aboutDatos.texto1)}</div>
      <LineasAlternas
        lineas={aboutDatos.seccion.split("\n").filter((line) => line.trim() !== "")}
        claseBase="about-seccion"
        keyPrefix="seccion"
      />
      <div className="about-texto">{obtenerLineas(aboutDatos.texto2)}</div>
      <LineasAlternas
        lineas={aboutDatos.pregunta.split("\n")}
        claseBase="about-seccion"
        keyPrefix="pregunta"
      />
      <div className="about-subtitulo">{obtenerLineas(aboutDatos.subtitulo2)}</div>
    </div>
  )
}
