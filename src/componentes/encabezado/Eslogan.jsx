import React, { useState, useRef } from "react"
import "./eslogan.scss"
import BotonEntradas from "../utils/BotonEntradas"
import IframeEntradas from "../utils/IframeEntradas"
import ModalEntradas from "../utils/ModalEntradas"

const Eslogan = () => {
  const [mostrarIframe, setMostrarIframe] = useState(false)
  const botonRef = useRef(null)

  return (
    <div className="eslogan-contenedor">
      <div className="eslogan">Where Metal Comes True</div>
      <div className="entradas">
        <BotonEntradas
          href="#"
          ref={botonRef}
          onClick={(e) => {
            e.preventDefault()
            setMostrarIframe(true)
          }}
        >
          Entradas
        </BotonEntradas>
      </div>
      <ModalEntradas
        isOpen={mostrarIframe}
        onClose={() => setMostrarIframe(false)}
        returnFocusRef={botonRef}
      >
        <IframeEntradas />
      </ModalEntradas>
    </div>
  )
}

export default Eslogan
