import React, { useState } from "react"
import "./Eslogan.scss"
import BotonEntradas from "../utils/BotonEntradas"
import IframeEntradas from "../utils/IframeEntradas"

const Eslogan = () => {
  const [mostrarIframe, setMostrarIframe] = useState(false)
  return (
    <div className="eslogan-contenedor">
      <div className="eslogan">Where Metal Comes True</div>
      <div className="entradas">
        <BotonEntradas
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setMostrarIframe(true)
          }}
        >
          Entradas
        </BotonEntradas>
      </div>
      {mostrarIframe && (
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
              onClick={() => setMostrarIframe(false)}
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
            <IframeEntradas />
          </div>
        </div>
      )}
    </div>
  )
}

export default Eslogan
