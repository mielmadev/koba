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
      '@imagenes': '/src/assets/imagenes',
      '@estilos': '/src/estilos',
      '@componentes': '/src/componentes',
      '@logos': '/src/assets/logos'
    }
  }
})
