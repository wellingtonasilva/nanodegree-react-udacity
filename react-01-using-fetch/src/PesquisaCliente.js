import React, { Component } from 'react';

class PesquisaCliente extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { pesquisarHandle } = this.props;

        return (
            <div>
                Pesquisa Cliente
                <form onSubmit={e => pesquisarHandle(e)}>
                    <input type='text' />
                    <button>Pesquisar</button>
                </form>
            </div>
        );
    }
}

export default PesquisaCliente;
