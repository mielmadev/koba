import React from 'react';

// Estilos
import './inicio-pag.scss';
import '../../estilos/fondos.scss';
import '../../estilos/scroll.scss';

// Componentes
import Fecha from '../fecha/fecha';
import Bandas from '../bandas/bandas';

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
        <Bandas />
      </div>
    </div>
  );
}