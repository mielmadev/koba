import React from 'react';
import MerchanFondo from '../../assets/imagenes/fondos/merchanFondo.webp';

export default function MerchanPag() {
    return (
        <div className="contenedor-pag">
            <div className="merchan-fondo">
                <img src={MerchanFondo} alt="Merchan Fondo" />
            </div>
            <div className="contenido-pag">
                merchan
            </div>
        </div >
    );
}