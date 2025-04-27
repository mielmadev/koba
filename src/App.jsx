import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import Encabezado from './componentes/encabezado/Encabezado';
import Fallback from './componentes/AppComponentes/Fallback';
import PAGES_LAZY from './componentes/AppComponentes/PagesLazy';
import GRUPOS_LAZY from './componentes/AppComponentes/GruposLazy';

// Estilos
import './App.scss';
import './estilos/global.scss'; // Consolidado

function App() {
  return (
    <Router>
      <Encabezado />
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            {PAGES_LAZY.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {GRUPOS_LAZY.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={PAGES_LAZY[0].path} />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
