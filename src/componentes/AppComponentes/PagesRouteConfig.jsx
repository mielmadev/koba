import PAGES from './PagesLazy';

// Generar rutas dinámicamente
const RUTAS = PAGES.reduce((acc, { key, path }) => {
  acc[key] = path;
  return acc;
}, {});

export default RUTAS;
