import { lazy } from 'react';

// Definición dinámica de páginas y rutas
const PAGES = [
  { key: 'INICIO', path: '/', label: 'Inicio', component: lazy(() => import('../paginas/InicioPag')) },
  { key: 'FAQ', path: '/preguntas-frecuentes', label: 'Preguntas Frecuentes', component: lazy(() => import('../paginas/FaqPag')) },
  { key: 'ABOUT', path: '/nosotros', label: 'Sobre Nosotros', component: lazy(() => import('../paginas/AboutPag')) },
  { key: 'MERCHAN', path: '/productos', label: 'Productos', component: lazy(() => import('../paginas/MerchanPag')) },
  { key: 'CONTACTO', path: '/contacto', label: 'Contacto', component: lazy(() => import('../paginas/ContactoPag')) },
];

export default PAGES;
