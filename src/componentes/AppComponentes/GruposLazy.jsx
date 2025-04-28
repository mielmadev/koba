// El campo 'component' indica qué componente React se muestra para esa ruta.
// Por ejemplo, para '/bandas/beforethedawn' se muestra el componente BeforeTheDawnPag.

import { lazy } from 'react';

const GRUPOS_LAZY = [
  {
    key: 'ASGARTH',
    path: '/bandas/asgarth',
    label: 'Asgarth',
    component: lazy(() => import('../paginas-grupos/AsgarthPag'))
  },
  {
    key: 'BEFORETHEDAWN',
    path: '/bandas/beforethedawn',
    label: 'Before The Dawn',
    component: lazy(() => import('../paginas-grupos/BeforeTheDawnPag'))
  },
  {
    key: 'ECLIPSE',
    path: '/bandas/eclipse',
    label: 'Eclipse',
    component: lazy(() => import('../paginas-grupos/EclipsePag'))
  },
  {
    key: 'EHUNKILO',
    path: '/bandas/ehunkilo',
    label: 'Ehun Kilo',
    component: lazy(() => import('../paginas-grupos/EhunKiloPag'))
  },
  // Agrega aquí más bandas siguiendo el mismo formato
];

export default GRUPOS_LAZY;
