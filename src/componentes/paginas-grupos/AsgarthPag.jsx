import React from 'react';
import AsgarthContenido from '../grupos-contenido/AsgarthContenido';

export default function AsgarthPag() {
  return (
    <div className="contenedor-pag">
      <div className="grupos-fondo">
{/*         <img src={GruposFondo} alt="About Fondo" />
 */}      </div>
      <div className="contenido-pag">
        <AsgarthContenido />
      </div>

    </div>
  );
}