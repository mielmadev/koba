import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Encabezado from './componentes/encabezado/encabezado';

import './App.scss';
import './estilos/enlaces.scss';
import Fallback from './componentes/comun/Fallback';

// Lazy loading de las páginas
const InicioPag = lazy(() => import('./componentes/paginas/inicio-pag'));
const FaqPag = lazy(() => import('./componentes/paginas/faq-pag'));
const AboutPag = lazy(() => import('./componentes/paginas/about-pag'));
const MerchanPag = lazy(() => import('./componentes/paginas/merchan-pag'));
const ContactoPag = lazy(() => import('./componentes/paginas/contacto-pag'));

function App() {
  return (
    <Router>
      <Encabezado /> {/* Componente Encabezado */}
      <main>
        {/* Suspense para manejar la carga diferida */}
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/inicio-pag" element={<InicioPag />} />
            <Route path="/faq-pag" element={<FaqPag />} />
            <Route path="/about-pag" element={<AboutPag />} />
            <Route path="/merchan-pag" element={<MerchanPag />} />
            <Route path="/contacto-pag" element={<ContactoPag />} />
            <Route path="*" element={<Navigate to="/inicio-pag" />} /> {/* Ruta comodín */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
