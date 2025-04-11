import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Asegura que Vite use la carpeta public
  server: {
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    port: 3000, // Puerto para desarrollo
  },
  build: {
    outDir: 'dist', // Carpeta de salida
    sourcemap: true, // Opcional: genera mapas de fuente
  },
  base: '/koba/', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio
})
