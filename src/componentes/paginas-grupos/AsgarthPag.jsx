import React from "react";
import AsgarthContenido from "@contenido-grupos/AsgarthContenido";
import AsgarthFondo from "@imagenes/fondos/asgarthFondo.webp";

export default function AsgarthPag() {
  return (
    <div className="contenedor-pag">
      <div className="bandas-fondo">
        <img src={AsgarthFondo} alt="About Fondo" />
      </div>
      <div className="contenido-pag">
        <AsgarthContenido />
      </div>
    </div>
  );
}
