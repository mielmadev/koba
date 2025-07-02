// Formulario de email para MielmaDev, mismo estilo que el de contacto
import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"
import "./FormularioMielmaDev.scss"

export default function FormularioMielmaDev() {
  const form = useRef()
  const textareaRef = useRef(null)
  const [estado, setEstado] = useState({
    enviado: false,
    error: false,
    cargando: false
  })

  const handleInput = (e) => {
    const el = e.target
    el.style.height = "auto"
    el.style.height = el.scrollHeight + "px"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEstado({ enviado: false, error: false, cargando: true })
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setEstado({ enviado: true, error: false, cargando: false })
          form.current.reset()
        },
        (error) => {
          setEstado({ enviado: false, error: true, cargando: false })
        }
      )
  }

  return (
    <form ref={form} className="formulario-email-mielmadev" onSubmit={handleSubmit}>
      <div className="formulario-email-mielmadev-inner">
        <div className="formulario-email-mielmadev-col izq">
          <label className="campo-nombre">
            Tu nombre
            <input type="text" name="user_name" required />
          </label>
          <label className="campo-email">
            Tu correo
            <input type="email" name="user_email" required />
          </label>
        </div>
        <div className="formulario-email-mielmadev-col der">
          <label className="campo-mensaje">
            ¿En qué podemos ayudarte?
            <textarea
              name="message"
              required
              ref={textareaRef}
              onInput={handleInput}
              style={{ overflow: "hidden", resize: "none" }}
            />
          </label>
          <div className="formulario-email-mielmadev-boton">
            <button type="submit" disabled={estado.cargando}>
              {estado.cargando ? "Enviando..." : "Enviar mensaje"}
            </button>
            {estado.enviado && <p className="exito">¡Mensaje enviado correctamente!</p>}
            {estado.error && <p className="error">Error al enviar. Inténtalo de nuevo.</p>}
          </div>
        </div>
      </div>
    </form>
  )
}
