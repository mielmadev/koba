import React from "react";
import BandasLista2025 from "./BandasLista2025";
import "./bandasContenido.scss";

const BandasContenido = () => {
  return (
    <div className="contenido">
      <div className="bandas-click">
        Haz clic en el nombre de cada banda para ver más información sobre ella.
      </div>
      <div className="bandas-lista">
        <BandasLista2025 />
      </div>
    </div>
  );
};

export default BandasContenido;
