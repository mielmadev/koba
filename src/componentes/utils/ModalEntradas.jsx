import React, { useRef, useEffect } from "react"
import "./ModalEntradas.scss"

const ModalEntradas = ({ isOpen, onClose, children, returnFocusRef }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      modalRef.current && modalRef.current.focus()
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose()
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen && returnFocusRef && returnFocusRef.current) {
      returnFocusRef.current.focus()
    }
  }, [isOpen, returnFocusRef])

  if (!isOpen) return null

  return (
    <div
      className="modal-entradas-faq"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="modal-entradas-faq__contenido">
        <button
          onClick={onClose}
          className="modal-entradas-faq__cerrar"
          aria-label="Cerrar"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalEntradas
