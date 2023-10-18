import React    from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Import in components
import App             from './App';

//import in bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


