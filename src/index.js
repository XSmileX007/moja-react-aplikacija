import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

// zadatak liste ucitavamo iz AppListe.js
import App from './components/AppListe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
