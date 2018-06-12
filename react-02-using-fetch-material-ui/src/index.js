import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListaCliente from './ListaCliente';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ListaCliente />,
    document.getElementById('root')
);
registerServiceWorker();
