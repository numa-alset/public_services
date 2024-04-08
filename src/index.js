import React from 'react'
import ReactDOM from 'react-dom'
//import App from './components/App.js'
import './style.css'
//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App';
import { AuthProvider } from './components/contex/AuthProvider';


ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


