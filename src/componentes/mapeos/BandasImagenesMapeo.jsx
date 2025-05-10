import React from "react";

const BandasImagenesMapeo = ({ bandas }) => (
  <>
    {bandas.map(({ nombre, imagen }) => (
      <div key={nombre} className="banda-imagen">
        {imagen && <img src={imagen} alt={nombre} loading="lazy" />}
      </div>
    ))}
  </>
);

export default BandasImagenesMapeo;
