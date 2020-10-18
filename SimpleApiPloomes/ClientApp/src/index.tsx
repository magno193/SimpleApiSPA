import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/layout/App';
import './global.css';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl ? baseUrl : undefined}>
    <App />
  </BrowserRouter>,
  rootElement);


registerServiceWorker();
