import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/base/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
