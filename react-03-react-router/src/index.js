import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListaCliente from './ListaCliente';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter>
        <ListaCliente />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
