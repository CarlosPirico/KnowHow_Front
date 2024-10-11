import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // React automaticamente procura pelo .tsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
