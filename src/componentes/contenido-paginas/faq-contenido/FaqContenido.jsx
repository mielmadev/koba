import React, { useState, useRef } from "react"
import faqDatos from "./faqDatos"
import "./faqContenido.scss"
import PuaGirando from "../../animaciones/PuaGirando"
import IframeEntradas from "../../utils/IframeEntradas"
import BotonEntradas from "../../utils/BotonEntradas"
import ModalEntradas from "../../utils/ModalEntradas"

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null)
  const [mostrarModalEntradas, setMostrarModalEntradas] = useState(false)
  const botonEntradasRef = useRef(null)

  const togglePregunta = (index) => {
    if (preguntaActiva === index) {
      setPreguntaActiva(null)
      setMostrarModalEntradas(false)
    } else {
      setPreguntaActiva(index)
      setMostrarModalEntradas(false)
    }
  }

  const renderPregunta = (item, index, abierta) => {
    if (item.id === "entradas") {
      let respuesta = item.respuesta.replace(
        /<a [^>]*class=['"]enlace-comprar-entradas['"][^>]*>.*?<\/a>/gi,
        "<BOTON_ENTRADAS_PLACEHOLDER>"
      )
      const partes = respuesta.split("<BOTON_ENTRADAS_PLACEHOLDER>")
      return (
        <div key={index} className="faq-item">
          <div
            className={`faq-pregunta${abierta ? " faq-pregunta--activa" : ""}`}
            onClick={() => togglePregunta(index)}
          >
            <span className="faq-pregunta-texto">{item.pregunta}</span>
            <span className="faq-icon" style={{ fontSize: "1.7em", width: 38, height: 38, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <PuaGirando girada={abierta} tamano={36} />
            </span>
          </div>
          {abierta && (
            <div className="faq-respuesta">
              <span dangerouslySetInnerHTML={{ __html: partes[0] }} />
              <BotonEntradas
                href="#"
                ref={botonEntradasRef}
                onClick={e => {
                  e.preventDefault()
                  setMostrarModalEntradas(true)
                }}
              >
                Entradas
              </BotonEntradas>
              <span dangerouslySetInnerHTML={{ __html: partes[1] }} />
              <ModalEntradas
                isOpen={mostrarModalEntradas}
                onClose={() => setMostrarModalEntradas(false)}
                returnFocusRef={botonEntradasRef}
              >
                <IframeEntradas />
              </ModalEntradas>
            </div>
          )}
        </div>
      )
    }
    // Pregunta normal
    return (
      <div key={index} className="faq-item">
        <div
          className={`faq-pregunta${abierta ? " faq-pregunta--activa" : ""}`}
          onClick={() => togglePregunta(index)}
        >
          <span className="faq-pregunta-texto">{item.pregunta}</span>
          <span className="faq-icon" style={{ fontSize: "1.7em", width: 38, height: 38, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <PuaGirando girada={abierta} tamano={36} />
          </span>
        </div>
        {abierta && (
          <div className="faq-respuesta" dangerouslySetInnerHTML={{ __html: item.respuesta }} />
        )}
      </div>
    )
  }

  return (
    <div className="contenido">
      {faqDatos.es.map((item, index) => {
        const abierta = preguntaActiva === index
        return renderPregunta(item, index, abierta)
      })}
    </div>
  )
}

export default FAQ
