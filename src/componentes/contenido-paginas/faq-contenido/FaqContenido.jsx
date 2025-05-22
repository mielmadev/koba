import React, { useState } from "react"
import faqDatos from "@datos/faqDatos"
import "./faqContenido.scss"
import PuaGirando from "../../animaciones/PuaGirando"

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null)
  const [cerrando, setCerrando] = useState(null)
  const timeoutRef = React.useRef()

  const togglePregunta = (index) => {
    if (preguntaActiva === index) {
      setCerrando(index)
      timeoutRef.current = setTimeout(() => {
        setPreguntaActiva(null)
        setCerrando(null)
      }, 500) // Duración de la animación de cierre
    } else {
      setPreguntaActiva(index)
      setCerrando(null)
    }
  }

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="contenido">
      {faqDatos.map((item, index) => {
        const abierta = preguntaActiva === index
        const enCierre = cerrando === index
        return (
          <div key={index} className="faq-item">
            <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
              <span className="faq-pregunta-texto">{item.pregunta}</span>
              <span className="faq-icon">
                <PuaGirando girada={abierta} cerrando={enCierre} size={20} />
              </span>
            </div>
            {(abierta || enCierre) && (
              <div className="faq-respuesta">{item.respuesta}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
