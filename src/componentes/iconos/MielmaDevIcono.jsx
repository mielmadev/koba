import React from "react"
import MielmaDevLogo from "@imagenes/MielmaDev/MielmaDevLogo.webp"

export default function MielmaDevIcono(props) {
  return (
    <img
      src={MielmaDevLogo}
      alt="MielmaDev Logo"
      className={"icono-social icono-mielmadev " + (props.className || "")}
      style={{ width: 32, height: 32, objectFit: "contain", borderRadius: "50%", ...props.style }}
    />
  )
}
