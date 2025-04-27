import { lazy } from 'react';

const GRUPOS_LAZY = [
  {
    key: 'ASGARTH',
    path: '/bandas/asgarth',
    label: 'Asgarth',
    component: lazy(() => import('../paginas-grupos/AsgarthPag'))
  },
  // Agrega aquí más bandas siguiendo el mismo formato
];

export default GRUPOS_LAZY;
