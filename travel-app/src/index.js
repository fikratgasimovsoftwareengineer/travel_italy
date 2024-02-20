import React from "react";
import  ReactDOM  from "react-dom";

import "bootstrap/dist/css/bootstrap.css"; 
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import './style/index.css'
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(


    <React.StrictMode>
       
            <App/>
            
    </React.StrictMode>

)

