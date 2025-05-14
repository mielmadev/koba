import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  server: {
    open: true,
    port: 3000,
    // Activar polling para mejorar el refresco en Windows
    watch: {
      usePolling: true,
      interval: 100
    }
    /*     host: "192.168.0.24", // Pc
     */
    /*     host: "192.168.0.20", // Laptop
     */
  },
  build: {
    outDir: "dist",
    sourcemap: false // Desactiva los source maps en producción
  },
  base: "/koba/",
  resolve: {
    alias: {
      "@componentes": "/src/componentes",
      "@datos": "/src/datos",
      "@estilos": "/src/estilos",
      "@imagenes": "/src/assets/imagenes",
      "@logos": "/src/assets/logos",
      "@mapeos": "/src/componentes/mapeos",
      "@paginas-grupos": "/src/componentes/paginas-grupos",
      "@paginas-principales": "/src/componentes/paginas-principales",
      "@contenido-grupos": "/src/componentes/contenido-grupos",
      "@contenido-paginas": "/src/componentes/contenido-paginas",
      "@cursor": "/src/assets/imagenes/cursor",
      "@fecha": "/src/componentes/fecha",
      "@AppComponentes": "/src/componentes/AppComponentes",
      "@iconos": "/src/componentes/iconos"
    }
  }
})
