# Crear un Proyecto React desde el Principio

## Requisitos Previos
- Node.js y npm instalados en tu sistema.
- Un editor de texto como Visual Studio Code.

## Pasos para Crear el Proyecto

1. **Crear una Carpeta para el Proyecto**
   ```bash
   mkdir mi-proyecto-react
   cd mi-proyecto-react
   ```

2. **Inicializar un Proyecto con Vite**
   Usaremos Vite para configurar el proyecto React de manera rápida.
   ```bash
   npm create vite@latest .
   ```
   Selecciona `React` y luego `JavaScript` o `TypeScript` según tus necesidades.

3. **Instalar Dependencias**
   ```bash
   npm install
   ```

4. **Ejecutar el Servidor de Desarrollo**
   ```bash
   npm run dev
   ```
   Abre el navegador en la URL proporcionada (por defecto: `http://localhost:5173`).

5. **Estructura del Proyecto**
   - `src/`: Contiene los archivos principales del proyecto.
   - `index.html`: Archivo HTML principal.
   - `package.json`: Configuración del proyecto y dependencias.

6. **Agregar Componentes**
   Crea componentes dentro de la carpeta `src/components`.
   ```javascript
   // src/components/MiComponente.jsx
   import React from 'react';

   const MiComponente = () => {
       return <h1>Hola, React!</h1>;
   };

   export default MiComponente;
   ```

7. **Importar el Componente en App.jsx**
   ```javascript
   import React from 'react';
   import MiComponente from './components/MiComponente';

   const App = () => {
       return (
           <div>
               <MiComponente />
           </div>
       );
   };

   export default App;
   ```

8. **Construir para Producción**
   ```bash
   npm run build
   ```
   Los archivos de producción estarán en la carpeta `dist/`.

## Recursos Adicionales
- [Documentación de React](https://reactjs.org/)
- [Documentación de Vite](https://vitejs.dev/)