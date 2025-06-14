import React, { useState } from "react"
import faqDatos from "./faqDatos"
import "./faqContenido.scss"
import PuaGirando from "../../animaciones/PuaGirando"
import iframeEntradas from "../../utils/iframeEntradas"
import BotonEntradas from "../../utils/BotonEntradas"

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null)
  const [mostrarPrompt, setMostrarPrompt] = useState(false)

  const togglePregunta = (index) => {
    if (preguntaActiva === index) {
      setPreguntaActiva(null)
      setMostrarPrompt(false)
    } else {
      setPreguntaActiva(index)
      setMostrarPrompt(false)
    }
  }

  return (
    <div className="contenido">
      {faqDatos.es.map((item, index) => {
        const abierta = preguntaActiva === index
        if (item.id === "entradas") {
          // Inserta el botón justo después de 'Consigue aquí tus' en la respuesta
          let respuesta = item.respuesta
          respuesta = respuesta.replace(
            /<a [^>]*class=['"]enlace-comprar-entradas['"][^>]*>.*?<\/a>/gi,
            "<BOTON_ENTRADAS_PLACEHOLDER>"
          )
          const partes = respuesta.split("<BOTON_ENTRADAS_PLACEHOLDER>")
          return (
            <div key={index} className="faq-item">
              <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
                <span className="faq-pregunta-texto">{item.pregunta}</span>
                <span
                  className="faq-icon"
                  style={{
                    fontSize: "1.7em",
                    width: 38,
                    height: 38,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <PuaGirando girada={abierta} tamano={36} />
                </span>
              </div>
              {abierta && (
                <div className="faq-respuesta">
                  <span dangerouslySetInnerHTML={{ __html: partes[0] }} />
                  <BotonEntradas
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setMostrarPrompt(true)
                    }}
                  >
                    Entradas
                  </BotonEntradas>
                  <span dangerouslySetInnerHTML={{ __html: partes[1] }} />
                  {mostrarPrompt && (
                    <div
                      className="modal-entradas-faq"
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.7)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          background: "#111",
                          padding: 24,
                          borderRadius: 12,
                          maxWidth: 650,
                          width: "90%",
                          position: "relative"
                        }}
                      >
                        <button
                          onClick={() => setMostrarPrompt(false)}
                          style={{
                            position: "absolute",
                            top: 8,
                            right: 12,
                            background: "none",
                            border: "none",
                            color: "#fff",
                            fontSize: 24,
                            cursor: "pointer"
                          }}
                          aria-label="Cerrar"
                        >
                          ×
                        </button>
                        <iframeEntradas />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        }
        // Resto de preguntas
        return (
          <div key={index} className="faq-item">
            <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
              <span className="faq-pregunta-texto">{item.pregunta}</span>
              <span
                className="faq-icon"
                style={{
                  fontSize: "1.7em",
                  width: 38,
                  height: 38,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <PuaGirando girada={abierta} tamano={36} />
              </span>
            </div>
            {abierta && (
              <div className="faq-respuesta" dangerouslySetInnerHTML={{ __html: item.respuesta }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
