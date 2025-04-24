import React from 'react';
import AsgarthPag from './AsgarthPag';
import SuicidalAngelsPag from './SuicidalAngelsPag';
// Importa aquí otros componentes de bandas según los vayas creando

const BANDAS_ROUTES = [
  {
    path: '/bandas/asgarth',
    element: <AsgarthPag />
  },
  {
    path: '/bandas/suicidal-angels',
    element: <SuicidalAngelsPag />
  },
  // Agrega aquí más rutas de bandas si es necesario
];

export default BANDAS_ROUTES;
