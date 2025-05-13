import React from "react";
import GrupoIntegrantesMapeo from "@mapeos/GrupoIntegrantesMapeo";
import GrupoAlbumsMapeo from "@mapeos/GrupoAlbumsMapeo";

const GrupoEncabezado = ({ imagen, nombre, estilo, anio, origen, integrantes, resumen, albums }) => (
  <>
    <div className="grupo-encabezado-superior">
      <div className="grupo-encabezado-superior-izquierda">
        <img src={imagen} alt={nombre} className="grupo-logo" />
      </div>
      <div className="grupo-encabezado-superior-derecha">
        <div className="grupo-estilo">
          {estilo} - {anio}
        </div>
        <div className="grupo-origen">
          {origen.pais} - {origen.provincia} - {origen.ciudad}
        </div>
      </div>
    </div>
    <div className="grupo-encabezado-inferior">
      <div className="grupo-encabezado-inferior-izquierda">
      </div>
      <div className="grupo-encabezado-resumen">
        <div className="grupo-resumen">{resumen}</div>
        <div className="grupo-integrantes">
          <GrupoIntegrantesMapeo integrantes={integrantes} />
        </div>

        <div className="grupo-albums">
          <GrupoAlbumsMapeo albums={albums} />
        </div>
      </div>
    </div>
  </>
);

export default GrupoEncabezado;
