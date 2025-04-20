import React from 'react';
import './merchanPag.scss';
import '../../estilos/fondos.scss';
import MerchanFondo from '../../assets/imagenes/fondos/merchanFondo.webp';

export default function MerchanPag() {
    return (
        <div className="merchan-contenedor">
            <div className="merchan-fondo">
                <img src={MerchanFondo} alt="Merchan Fondo" />
            </div>
            <h1>Merchan</h1 >
        </div >
    );
}