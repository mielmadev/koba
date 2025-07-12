
import React from "react";
import { Link } from "react-router-dom";
import "./pie.scss";


function Pie() {
  const year = new Date().getFullYear();
  return (
    <footer className="pie">
      <div className="pie__container">
        <div className="pie__info">
          <span className="pie__info-copyright">© {year} KobaLive</span>
          <Link
            className="pie__info-developer"
            to="/mielmadev"
            tabIndex={0}
            style={{ textDecoration: "none" }}
            aria-label="Más información sobre el desarrollador MielmaDev"
          >
            © {year} <span className="pie__info-developer-name">MielmaDev</span> Desarrollador
          </Link>
        </div>
        <div className="pie__legal">
          <Link className="pie__legal-link pie__legal-link--privacidad" to="/politica-privacidad" rel="noopener noreferrer">Política de privacidad</Link>
          <Link className="pie__legal-link pie__legal-link--aviso" to="/aviso-legal" rel="noopener noreferrer">Aviso legal</Link>
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
      </div>
    </footer>
  );
}

export default Pie;
