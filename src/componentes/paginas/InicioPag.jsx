import React from 'react';

// Estilos
import './inicioPag.scss';
import '../../estilos/fondos.scss';
import '../../estilos/scroll.scss';

// Componentes
import Fecha from '../fecha/Fecha';
import Bandas2025 from '../bandas/Bandas2025';

// Imágenes
import VolcanFondo from '../../assets/imagenes/fondos/volcanFondo.webp';

export default function InicioPag() {
  return (
    <div className="inicio-contenedor">
      <div className="inicio-fondo">
        <img src={VolcanFondo} alt="Volcan Fondo" />
      </div>
      <div className="inicio-contenido">
        <Fecha />
        <Bandas2025 />
      </div>
    </div>
  );
}