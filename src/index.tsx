import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Path from '/pages/import-pages';
import NavBar from '/components/NavBar/';
import GlobalStyle from './styles/global.styles';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <NavBar />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Path.Home />} />
          <Route path="/quem-somos" element={<Path.AboutUs />} />
          <Route path="/contatos" element={<Path.Contacts />} />
          <Route path="/nosso-dia-a-dia" element={<Path.DailyLife />} />
          <Route path="/servicos" element={<Path.Services />} />
          <Route path="/estrutura" element={<Path.Structure />} />
          <Route path="/404" element={<Path.NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  throw new Error("Element with id 'root' not found in the DOM.");
}
