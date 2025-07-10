import React from "react";
import "./pie.scss";


function Pie() {
  const year = new Date().getFullYear();
  return (
    <footer className="pie">
      <div className="pie__container">
        <div className="pie__info">
          <span className="pie__info-copyright">© {year} KobaLive</span>
          <a
            className="pie__info-developer"
            href="#"
            rel="noopener noreferrer"
          >
            © {year} <span className="pie__info-developer-name">MielmaDev</span> Desarrollador
          </a>
        </div>
        <div className="pie__sponsors">
          <a
            className="pie__sponsors-link"
            href="#"
            rel="noopener noreferrer"
          >
            Patrocinadores
          </a>
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
