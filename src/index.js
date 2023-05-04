import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
// ovdje radimo switch izmedju singlepage app, konkretno za zadatak Liste ucitavamo App iz AppLista
import App from './components/AppLista';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
