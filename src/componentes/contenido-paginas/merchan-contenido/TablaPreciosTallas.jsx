import React from "react"
import tablaMerchan from "@imagenes/merchan/precios-merchan.webp"

const TablaPreciosTallas = () => (
  <div className="tabla-precios-tallas" style={{ textAlign: "center", margin: "2rem 0" }}>
    <img
      src={tablaMerchan}
      alt="Tabla de precios y tallas de merchandising KOBA"
      style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 2px 16px #0003" }}
      loading="lazy"
    />
    <div style={{ fontSize: "0.95em", color: "#666", marginTop: "0.5rem" }}>
      Consulta precios y tallas disponibles. Imagen informativa.
    </div>
  </div>
)

export default TablaPreciosTallas
