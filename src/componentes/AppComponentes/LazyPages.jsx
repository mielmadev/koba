import { lazy } from 'react';

// Definición dinámica de páginas y rutas
const PAGES = [
  { key: 'INICIO', path: '/', label: 'Inicio', component: lazy(() => import('../paginas/2025Pag')) },
  { key: 'FAQ', path: '/faq', label: 'FAQ', component: lazy(() => import('../paginas/FaqPag')) },
  { key: 'ABOUT', path: '/about', label: 'About', component: lazy(() => import('../paginas/AboutPag')) },
  { key: 'MERCHANDISING', path: '/merchandising', label: 'Merchandising', component: lazy(() => import('../paginas/MerchanPag')) },
  { key: 'CONTACTO', path: '/contacto', label: 'Contacto', component: lazy(() => import('../paginas/ContactoPag')) },
  { key: 'BANDAS', path: '/bandas', label: 'Bandas', component: lazy(() => import('../paginas/BandasPag')) },
];

export default PAGES;
