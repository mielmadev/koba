import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// Componentes
import Encabezado from "./componentes/encabezado/Encabezado.jsx"
import Fallback from "./componentes/AppComponentes/Fallback.jsx"
import PAGES_LAZY from "./componentes/AppComponentes/PagesLazy.jsx"
import GRUPOS_LAZY from "./componentes/AppComponentes/GruposLazy.jsx"

import "@estilos/app/appEstilosIndex.scss" // Consolidado

function App() {
  return (
    <Router basename="/koba">
      <Encabezado />
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            {/* Rutas principales */}
            {PAGES_LAZY.map(({ path, component }) => (
              // Usamos 'component' en vez de 'Component' para evitar el error 'no-unused-vars' de ESLint,
              // y creamos el elemento con React.createElement para mantener la funcionalidad dinámica.
              <Route key={path} path={path} element={React.createElement(component)} />
            ))}
            {/* Ruta dinámica de bandas: debe ir antes del catch-all */}
            {GRUPOS_LAZY.map(({ path, component }) => (
              // Usamos 'component' en vez de 'Component' para evitar el error 'no-unused-vars' de ESLint,
              // y creamos el elemento con React.createElement para mantener la funcionalidad dinámica.
              <Route key={path} path={path} element={React.createElement(component)} />
            ))}
            {/* Ruta catch-all al final para evitar absorber rutas dinámicas */}
            <Route path="*" element={<Navigate to={PAGES_LAZY[0].path} />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  )
}

export default App
