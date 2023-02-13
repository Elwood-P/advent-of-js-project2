import React from 'react';
import ReactDOM from 'react-dom/client';
import CartProvider from './store/CartProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
  // </React.StrictMode>,
);
