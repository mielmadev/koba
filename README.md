# Koba – Proyecto React + Vite

Este proyecto utiliza [React](https://react.dev/) y [Vite](https://vitejs.dev/) para ofrecer una base moderna, rápida y flexible para el desarrollo de aplicaciones web. Incluye configuración avanzada de ESLint, Prettier, Stylelint y ordenación de SCSS para mantener un código limpio y consistente.

## Requisitos previos

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) (v8 o superior)

## Instalación

1. Clona el repositorio:
   ```powershell
   git clone <url-del-repositorio>
   cd koba
   ```
2. Instala las dependencias:
   ```powershell
   npm install
   ```

## Scripts principales

- `npm run dev` – Inicia el servidor de desarrollo con recarga en caliente (HMR).
- `npm run build` – Genera la versión de producción optimizada.
- `npm run preview` – Previsualiza la build de producción localmente.
- `npm run fix` – Formatea y corrige automáticamente JS/JSX, SCSS y aplica reglas de linting.

## Formateo y linting automático

Para dejar todo el código JS/JSX y SCSS perfectamente formateado y ordenado, ejecuta:

```powershell
npm run fix
```

Este comando:
- Formatea todo el código con Prettier
- Corrige automáticamente los errores de ESLint
- Corrige y ordena el SCSS con Stylelint y PostCSS Sorting

**Recomendado:** Ejecutar antes de cada commit o pull request.

## Estructura del proyecto

- `src/` – Código fuente principal (componentes, estilos, utilidades, datos, etc.)
- `public/` – Recursos públicos (imágenes, favicon, etc.)
- `config/` – Archivos de configuración (`eslint.config.js`, `stylelint.config.js`, `postcss-sorting.config.js`, `.prettierrc`)

## Plugins oficiales de Vite para React

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (usa Babel para Fast Refresh)
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) (usa SWC para Fast Refresh)

## SCSS: Orden automático de mixins `*-bp` (breakpoints)

Los mixins que terminan en `-bp` se ordenan automáticamente al final del bloque SCSS (Stylelint y PostCSS Sorting). Así los breakpoints quedan agrupados y separados de los mixins generales.

## Expansión de la configuración de ESLint

Para proyectos en producción, se recomienda usar TypeScript y habilitar reglas de linting con tipado. Consulta la [plantilla oficial de React + TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) y la documentación de [`typescript-eslint`](https://typescript-eslint.io).

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.

---

> Todos los archivos de configuración están en la carpeta `config/`. Consúltalos o edítalos directamente en el proyecto.
