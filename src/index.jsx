import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

// _____________ import "bootstrab & Fontawsome & jquery &popper.js" ____________
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js";

// _____________ import main css file ____________

import './index.css';

ReactDOM.render(
  
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </React.StrictMode>
    
  ,
  document.getElementById('root')
);



// reportWebVitals();
