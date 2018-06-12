import React, { Component} from 'react';
import './ListaCliente.css';
import PesquisaCliente from './PesquisaCliente';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListaCliente extends Component
{
    state = {
        query: '',
        clients: []
    }

    clickMe = (e, id) => {
        console.log(`id: ${id}`);
    }

    pesquisar = (e) => {
        e.preventDefault();
        const { value } = e.target.querySelector('input');
        this.setState({
            query: value
        });
    }

    limparSelecao = (e) => {
        this.setState({
            query: ''
        });
    }

    componentDidMount()
    {
        const headers = {
            'Accept': 'application/json',
            'Authorization': Math.random().toString(36).substr(-8)
        }
        fetch('http://localhost:5708/clients', { headers })
            .then(res => res.json())
            .then(json => this.setState({clients: json}));
    }

    render()
    {
        let currentList;
        const { query, clients } = this.state;
        //Realiza pesquisa
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            currentList = clients.filter((item) => match.test(item.nome));
        } else {
            currentList = clients;
        }

        //Ordena array
        currentList.sort(sortBy('nome'));

        return (
            <div>
                <PesquisaCliente pesquisarHandle={this.pesquisar}/>
                {currentList.length !== clients.length && (
                    <div>
                        <span>Now showing {currentList.length} of { clients.length}</span>
                        <button onClick={ e => this.limparSelecao(e)}>Show All </button>
                    </div>
                )}
                <ul>
                { currentList.map((item,index) => (
                    <li key={item.id.toString()}>
                        {item.nome}
                        <button className='btn' onClick={ e => this.clickMe(e, item.id)}>Click Me!</button>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}

export default ListaCliente;
