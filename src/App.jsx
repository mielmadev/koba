import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import Encabezado from './componentes/encabezado/encabezado';
import Fallback from './componentes/comun/Fallback';
import PAGES from './componentes/comun/LazyPages'; // Asegúrate de que PAGES esté actualizado
import AsgarthPag from './componentes/paginas/bandas/AsgarthPag';
import BANDAS_ROUTES from './componentes/bandas/BandasRouteConfig';

// Estilos
import './App.scss';
import './estilos/enlaces.scss';

function App() {
  return (
    <Router>
      <Encabezado /> {/* Componente de navegación principal */}
      <main>
        {/* Suspense para manejar la carga diferida de las páginas */}
        <Suspense fallback={<Fallback />}>
          <Routes>
            {PAGES.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {BANDAS_ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/bandas/asgarth" element={<AsgarthPag />} />
            <Route path="*" element={<Navigate to={PAGES[0].path} />} /> {/* Redirigir a la primera ruta */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
