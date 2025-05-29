import React, { useState } from "react"
import faqDatos from "@datos/faqDatos"
import "./faqContenido.scss"
import PuaGirando from "../../animaciones/PuaGirando"
import IframeEntradas from "./IframeEntradas"

const FAQ = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null)
  const [cerrando, setCerrando] = useState(null)
  const [mostrarPrompt, setMostrarPrompt] = useState(false)
  const timeoutRef = React.useRef()

  const togglePregunta = (index) => {
    if (preguntaActiva === index) {
      setCerrando(index)
      timeoutRef.current = setTimeout(() => {
        setPreguntaActiva(null)
        setCerrando(null)
        setMostrarPrompt(false)
      }, 500)
    } else {
      setPreguntaActiva(index)
      setCerrando(null)
      setMostrarPrompt(false)
    }
  }

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  React.useEffect(() => {
    // Delegación de eventos para el enlace dentro del HTML de la respuesta
    const handler = (e) => {
      if (e.target.classList.contains('enlace-comprar-entradas')) {
        e.preventDefault();
        setMostrarPrompt(true);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="contenido">
      {faqDatos.es.map((item, index) => {
        const abierta = preguntaActiva === index
        const enCierre = cerrando === index
        if (item.id === "entradas") {
          // Reemplaza los saltos de línea por <br /> para mantener el HTML y los saltos
          const respuestaConSaltos = item.respuesta.replace(/\n/g, '<br />');
          return (
            <div key={index} className="faq-item">
              <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
                <span className="faq-pregunta-texto">{item.pregunta}</span>
                <span className="faq-icon">
                  <PuaGirando girada={abierta} cerrando={enCierre} size={20} />
                </span>
              </div>
              {(abierta || enCierre) && (
                <div className="faq-respuesta">
                  <div dangerouslySetInnerHTML={{ __html: respuestaConSaltos }} />
                  {mostrarPrompt && (
                    <div className="modal-entradas-faq" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ background: '#111', padding: 24, borderRadius: 12, maxWidth: 650, width: '90%', position: 'relative' }}>
                        <button onClick={() => setMostrarPrompt(false)} style={{ position: 'absolute', top: 8, right: 12, background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer' }} aria-label="Cerrar">×</button>
                        <IframeEntradas />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        }
        return (
          <div key={index} className="faq-item">
            <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
              <span className="faq-pregunta-texto">{item.pregunta}</span>
              <span className="faq-icon">
                <PuaGirando girada={abierta} cerrando={enCierre} size={20} />
              </span>
            </div>
            {(abierta || enCierre) && <div className="faq-respuesta">{item.respuesta}</div>}
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
