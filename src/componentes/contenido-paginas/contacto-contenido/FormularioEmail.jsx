// Para EmailJS, añade en tu .env (no subir a GitHub):
// VITE_EMAILJS_USER_ID=xxxxxxx
// VITE_EMAILJS_SERVICE_ID=xxxxxxx
// VITE_EMAILJS_TEMPLATE_ID=xxxxxxx

import React, { useRef, useState } from "react"
// Instala emailjs-com: npm install emailjs-com
import emailjs from "emailjs-com"
import "./FormularioEmail.scss"

export default function FormularioEmail() {
  const form = useRef()
  const textareaRef = useRef(null)
  const [estado, setEstado] = useState({
    enviado: false,
    error: false,
    cargando: false
  })

  // Ajusta la altura del textarea automáticamente
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
        // Desde .env
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
          console.error("Error al enviar email:", error)
          setEstado({ enviado: false, error: true, cargando: false })
        }
      )
  }

  return (
    <form ref={form} className="formulario-email" onSubmit={handleSubmit}>
      <label className="campo-nombre">
        Nombre
        <input type="text" name="user_name" required />
      </label>
      <label className="campo-email">
        Correo electrónico
        <input type="email" name="user_email" required />
      </label>
      <label className="campo-mensaje">
        Mensaje
        <textarea
          name="message"
          required
          ref={textareaRef}
          onInput={handleInput}
          style={{ overflow: "hidden", resize: "none" }}
        />
      </label>
      <button type="submit" disabled={estado.cargando}>
        {estado.cargando ? "Enviando..." : "Enviar"}
      </button>
      {estado.enviado && <p className="exito">¡Mensaje enviado correctamente!</p>}
      {estado.error && <p className="error">Error al enviar. Inténtalo de nuevo.</p>}
    </form>
  )
}
