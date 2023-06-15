import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArticleProvider } from './context/ArticlesContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
