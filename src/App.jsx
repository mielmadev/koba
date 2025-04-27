import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import Encabezado from './componentes/encabezado/Encabezado';
import Fallback from './componentes/AppComponentes/Fallback';
import PAGES_LAZY from './componentes/AppComponentes/PagesLazy';
import BANDAS_ROUTES from './componentes/paginas-grupos/BandasRouteConfig';

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
            {BANDAS_ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<Navigate to={PAGES_LAZY[0].path} />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
