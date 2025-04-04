import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Asegura que Vite use la carpeta public
  server: {
    open: true, // Abre el navegador automáticamente al iniciar el servidor
  },
})
