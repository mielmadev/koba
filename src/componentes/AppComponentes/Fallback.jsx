import React from "react"
import Pua from "@imagenes/pua/KobaPua_300x300.png"
import "./fallback.scss"


// Helper para forzar el fallback en imports lazy
// Ejemplo de uso en PagesLazy.jsx:
// component: lazy(() =>
//   window.FORZAR_FALLBACK
//     ? new Promise(res => setTimeout(() => res(import("@paginas-principales/KobaIVPag")), 4000))
//     : import("@paginas-principales/KobaIVPag")
// )
// Puedes ajustar el tiempo (4000 ms = 4 segundos) para ver bien el efecto.
// Para forzar el Fallback y probar la animación, descomenta la siguiente línea:
window.FORZAR_FALLBACK = true;

function Fallback() {
  return (
    <div className="fallback-container">
      {window.FORZAR_FALLBACK && (
        <div className="fallback-mensaje-contenedor">
          <span className="fallback-pua-rebote lateral-pua">
            <img
              src={Pua}
              alt="Pua Koba"
              className="fallback-image fallback-image-lateral"
              onError={e => (e.target.style.display = "none")}
            />
          </span>
          <div className="fallback-mensaje-texto">
            <span className="fallback-mensaje-linea">
              Las montañas han callado y la página se ha desvanecido…<br />
              El rayo de <span className="fallback-mensaje-sugaar">Sugaar</span> partió el silencio en dos,<br />
              <span className="fallback-mensaje-mari">Mari</span> intenta restaurar el caos.
            </span>
          </div>
          <span className="fallback-pua-rebote lateral-pua reverse">
            <img
              src={Pua}
              alt="Pua Koba"
              className="fallback-image fallback-image-lateral"
              onError={e => (e.target.style.display = "none")}
            />
          </span>
        </div>
      )}
      <noscript>
        <p>Cargando...</p>
      </noscript>
    </div>
  )
}

export default Fallback
