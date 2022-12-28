import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
/* import Snippetone from './components/Snippet1';
import Snippettwo from './components/Snippet2'; */

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);


/* const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(

        <Snippetone />        
  
);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  
        <Snippettwo />

); */
