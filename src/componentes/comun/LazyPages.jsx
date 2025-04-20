import { lazy } from 'react';

// Definición dinámica de páginas y rutas
const PAGES = [
  { key: 'INICIO', path: '/inicio-pag', label: 'Inicio', component: lazy(() => import('../paginas/inicio-pag')) },
  { key: 'FAQ', path: '/faq-pag', label: 'FAQ', component: lazy(() => import('../paginas/faq-pag')) },
  { key: 'ABOUT', path: '/about-pag', label: 'About', component: lazy(() => import('../paginas/about-pag')) },
  { key: 'MERCHAN', path: '/merchan-pag', label: 'Merchandising', component: lazy(() => import('../paginas/merchan-pag')) },
  { key: 'CONTACTO', path: '/contacto-pag', label: 'Contacto', component: lazy(() => import('../paginas/contacto-pag')) },
];

export default PAGES;
