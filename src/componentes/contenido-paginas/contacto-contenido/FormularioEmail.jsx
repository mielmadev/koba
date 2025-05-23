import React, { useRef, useState } from "react";
// Si usas Vite/CRA: npm install emailjs-com
import emailjs from "emailjs-com";
import "./FormularioEmail.scss";

export default function FormularioEmail() {
  const form = useRef();
  const [estado, setEstado] = useState({ enviado: false, error: false, cargando: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstado({ enviado: false, error: false, cargando: true });
    emailjs
      .sendForm(
        "service_MielmaDev", // Service ID real de EmailJS
        "template_Contacto", // Reemplaza por tu Template ID de EmailJS
        form.current,
        "V5NECqFo8Hl8TFBzA" // Reemplaza por tu User ID/public key de EmailJS
      )
      .then(
        (result) => {
          setEstado({ enviado: true, error: false, cargando: false });
          form.current.reset();
        },
        (error) => {
          setEstado({ enviado: false, error: true, cargando: false });
        }
      );
  };

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
        <textarea name="message" required />
      </label>
      <button type="submit" disabled={estado.cargando}>
        {estado.cargando ? "Enviando..." : "Enviar"}
      </button>
      {estado.enviado && <p className="exito">¡Mensaje enviado correctamente!</p>}
      {estado.error && <p className="error">Error al enviar. Inténtalo de nuevo.</p>}
    </form>
  );
}
