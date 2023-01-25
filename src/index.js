import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router';
import reportWebVitals from './reportWebVitals';
import { TmdbApiContextProvider } from './contexts/TmdbApiContext';

ReactDOM.render(
  <React.StrictMode>
    <TmdbApiContextProvider>
      <Router />
    </TmdbApiContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
