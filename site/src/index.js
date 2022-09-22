import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuAdmin from './components/menuAdmin';
import CadastroAdm from './pages/CadastartAdm';
import CriarConta from './pages/CriarConta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuAdmin />
  </React.StrictMode>
);

