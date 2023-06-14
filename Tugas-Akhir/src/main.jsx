import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Provider from './context/BannerContext';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
  <Provider>
    <App />
  </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
);
  
