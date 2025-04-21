import PAGES from './LazyPages';

// Generar rutas dinámicamente
const RUTAS = PAGES.reduce((acc, { key, path }) => {
  acc[key] = path;
  return acc;
}, {});

export default RUTAS;
