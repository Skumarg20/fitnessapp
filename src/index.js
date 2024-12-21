//real wala

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//if we want to use router we need to add this in our project to run the routers
import { BrowserRouter } from 'react-router-dom';


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter> 
);