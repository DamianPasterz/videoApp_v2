import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { FilmProvider } from './context/film_context';
import { FilterProvider } from './context/filter_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </FilmProvider>
  </React.StrictMode>,
);
