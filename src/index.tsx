import React from 'react';
import ReactDOM from 'react-dom/client';
import './global_styles/index.css';
import App from './App';
import './global_styles/MainPages.css';
import Header from './components/header/Header';
import GlobalProvider from './hooks/GlobalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Header />
      <App />
    </GlobalProvider>
  </React.StrictMode>
);