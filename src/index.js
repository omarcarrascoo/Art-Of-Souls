import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { CartDataProvider } from './context/cartContext';
import { CountDataProvider } from './context/countContext';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <CountDataProvider>
        <CartDataProvider>
            <Router>
                <App/>
            </Router>
        </CartDataProvider>
    </CountDataProvider>
    
   
    
)



