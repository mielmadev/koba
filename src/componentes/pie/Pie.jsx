import React from "react";
import "./pie.scss";


function Pie() {
  const year = new Date().getFullYear();
  return (
    <footer className="pie">
      <div className="pie__container">
        <div className="pie__info">
          <span className="pie__info-copyright">© {year} KobaLive</span>
          <span className="pie__info-developer">
            © {year} <span className="pie__info-developer-name">MielmaDev</span> Desarrollador
          </span>
        </div>
        <div className="pie__sponsors">
          <span className="pie__sponsors-title">Patrocinadores</span>
          {/* Aquí puedes anidar logos o enlaces de patrocinadores si los hay */}
        </div>
        <div className="pie__legal">
          <a className="pie__legal-link pie__legal-link--privacidad" href="#" rel="noopener noreferrer">Política de privacidad</a>
          <a className="pie__legal-link pie__legal-link--aviso" href="#" rel="noopener noreferrer">Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}

export default Pie;
