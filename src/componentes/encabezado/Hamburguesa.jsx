import React, { useRef, useEffect, useState } from "react"
import "./Hamburguesa.scss"

// Componente Hamburguesa: botón para abrir/cerrar el menu
const Hamburguesa = ({ abierto, onClick }) => {
  // Estado para controlar la animación de cierre
  const [cerrando, setCerrando] = useState(false)
  // Ref para guardar el valor anterior de 'abierto'
  const prevAbierto = useRef(abierto)
  // Ref para almacenar el timeout y poder limpiarlo
  const timeoutRef = useRef()

  // Efecto para detectar el cierre y activar la animación inversa
  useEffect(() => {
    // Si estaba abierto y ahora está cerrado, activa la animación de cierre
    if (prevAbierto.current && !abierto) {
      setCerrando(true)
      timeoutRef.current = setTimeout(() => setCerrando(false), 500) // 500ms = duración de la animación
    }
    // Actualiza el valor previo de 'abierto'
    prevAbierto.current = abierto
    // Limpia el timeout si el componente se desmonta o cambia 'abierto'
    return () => clearTimeout(timeoutRef.current)
  }, [abierto])

  // Construye la lista de clases CSS según el estado
  const clases = ["hamburguesa"]
  if (abierto) clases.push("abierto") // Menu abierto
  if (cerrando) clases.push("cerrando") // Animación de cierre activa

  return (
    <button
      className={clases.join(" ")}
      onClick={onClick}
      aria-label={abierto ? "Cerrar menu" : "Abrir menu"}
    >
      <span className="hamburguesa-texto">Menu</span>
      <span className="minipua" />
    </button>
  )
}

export default Hamburguesa
