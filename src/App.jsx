import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InicioPagina from './components/paginas/inicio-pag';
import FAQ from './components/paginas/faq-pag';
import About from './components/paginas/about-pag';
import Merchan from './components/paginas/merchan-pag';
import ContactoPag from './components/paginas/contacto-pag';
import './App.scss';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/inicio-pag" element={<InicioPagina />} />
          <Route path="/faq-pag" element={<FAQ />} />
          <Route path="/about-pag" element={<About />} />
          <Route path="/merchan-pag" element={<Merchan />} />
          <Route path="/contacto-pag" element={<ContactoPag />} />
          <Route path="*" element={<Navigate to="/inicio-pag" />} /> {/* Ruta comodín */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
