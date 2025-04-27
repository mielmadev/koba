import PAGES_LAZY from './PagesLazy';

// Generar rutas dinámicamente
const RUTAS = PAGES_LAZY.reduce((acc, { key, path }) => {
  acc[key] = path;
  return acc;
}, {});

export default RUTAS;
