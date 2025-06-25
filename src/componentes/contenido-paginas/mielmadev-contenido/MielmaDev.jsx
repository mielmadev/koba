import React from "react"
import "./MielmaDev.scss"
import FormularioMielmaDev from "./FormularioMielmaDev"

const MielmaDev = () => (
  <>
    <div className="mielmadev">
      <div className="mielmadev-titulo">MielmaDev Full Stack Developer</div>
      <div className="mielmadev-textos">
        <div className="mielmadev-descripcion">
          <span className="mielmadev-servicio">Creamos páginas web a medida para profesionales y emprendedores</span><br />
          Soluciones profesionales en desarrollo web. Especialista en aplicaciones modernas, escalables y seguras para empresas y proyectos que buscan excelencia tecnológica.
        </div>
        <div className="mielmadev-eslogan">
          Compromiso, calidad y resultados para tu transformación digital.
        </div>
      </div>
      <div className="mielmadev-formulario">
        <FormularioMielmaDev />
      </div>
    </div>
  </>
)

export default MielmaDev
