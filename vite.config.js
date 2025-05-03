import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  base: '/koba/',
  resolve: {
    alias: {
      '@componentes': '/src/componentes',
      '@datos': '/src/datos',
      '@estilos': '/src/estilos',
      '@imagenes': '/src/assets/imagenes',
      '@logos': '/src/assets/logos',
      '@mapeos': '/src/componentes/mapeos',
      '@paginas-grupos': '/src/componentes/paginas-grupos',
      '@paginas-principales': '/src/componentes/paginas-principales',
      '@iconos': '/src/componentes/iconos',
      '@contenido-grupos': '/src/componentes/contenido-grupos',
      '@contenido-paginas': '/src/componentes/contenido-paginas',
      '@cursor': '/src/assets/imagenes/cursor',
      '@fecha': '/src/componentes/fecha',
      '@AppComponentes': '/src/componentes/AppComponentes',
    }
  }
})
