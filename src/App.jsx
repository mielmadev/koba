import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Encabezado from './componentes/encabezado-pie/encabezado'; // Importación del componente Encabezado
import InicioPag from './componentes/paginas/inicio-pag';
import FaqPag from './componentes/paginas/faq-pag';
import AboutPag from './componentes/paginas/about-pag';
import MerchanPag from './componentes/paginas/merchan-pag';
import ContactoPag from './componentes/paginas/contacto-pag';
import './App.scss';
import './estilos/enlaces.scss';

function App() {
  return (
    <Router>
      <Encabezado /> {/* Componente Encabezado agregado */}
      <main>
        <Routes>
          <Route path="/inicio-pag" element={<InicioPag />} />
          <Route path="/faq-pag" element={<FaqPag />} />
          <Route path="/about-pag" element={<AboutPag />} />
          <Route path="/merchan-pag" element={<MerchanPag />} />
          <Route path="/contacto-pag" element={<ContactoPag />} />
          <Route path="*" element={<Navigate to="/inicio-pag" />} /> {/* Ruta comodín */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
