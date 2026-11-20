import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Assuming you have an App component in components directory
import './index.css'; // Assuming you have some global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);