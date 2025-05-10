import React from "react";
import BandasContenido from "@contenido-paginas/bandas-contenido/BandasContenido";
import ContactoFondo from "@imagenes/fondos/bandasFondo.webp";

export default function BandasPag() {
  return (
    <div className="contenedor-pag">
      <div className="contacto-fondo">
        <img src={ContactoFondo} alt="Contacto Fondo" />
      </div>
      <div className="contenido-pag">
        <BandasContenido />
      </div>
    </div>
  );
}
