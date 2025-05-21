import React from "react"
import "./aboutDatosLista.scss"
import { aboutDatos } from "@datos/aboutDatos"

function LineasAlternas({ lineas, claseBase, keyPrefix }) {
  return lineas.map((linea, i) => (
    <div
      key={`${keyPrefix}-${i}`}
      className={`${claseBase} ${claseBase}-linea-${i === 0 ? "izq" : "der"}`}
    >
      {linea}
    </div>
  ));
}

export default function AboutDatosLista() {
  function obtenerLineas(texto) {
    return texto.split("\n");
  }

  return (
    <div className="about-datos-lista">
      <div className="about-titulo">{aboutDatos.titulo}</div>

      <LineasAlternas lineas={obtenerLineas(aboutDatos.subtitulo1)} claseBase="about-subtitulo" keyPrefix="subtitulo" />

      <div className="about-texto">{aboutDatos.texto1}</div>

      <LineasAlternas lineas={obtenerLineas(aboutDatos.seccion1)} claseBase="about-seccion" keyPrefix="seccion1" />

      <div className="about-texto">{aboutDatos.texto2}</div>

      <div className="about-seccion">{aboutDatos.promesa}</div>

      <div className="about-texto">{aboutDatos.texto3}</div>

      <div className="about-seccion">{aboutDatos.pregunta}</div>

      <div className="about-subtitulo">{aboutDatos.subtitulo2}</div>

      <div className="about-seccion">{aboutDatos.seccion2}</div>
    </div>
  )
}
