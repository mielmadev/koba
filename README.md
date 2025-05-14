# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Formateo y linting automático (Prettier + ESLint + Stylelint + SCSS Order)

Para dejar todo el código JS/JSX y SCSS perfectamente formateado y ordenado, ejecuta:

```powershell
npm run fix
```

Este comando:

- Formatea todo el código con Prettier
- Corrige automáticamente los errores de ESLint
- Corrige y ordena el SCSS con Stylelint y PostCSS Sorting

**Recomendado:** Antes de cada commit o pull request.

---

## SCSS: Orden automático de mixins \*-bp (breakpoints)

Los mixins que terminan en `-bp` se ordenan automáticamente al final del bloque SCSS (Stylelint y PostCSS Sorting). Así los breakpoints quedan agrupados y separados de los mixins generales.

---

## Archivos de configuración

Todos los archivos (`.prettierrc`, `eslint.config.js`, `stylelint.config.js`, `postcss-sorting.config.js`) están en la carpeta `config/`. No es necesario copiarlos aquí: consúltalos o edítalos directamente en el proyecto.

---
