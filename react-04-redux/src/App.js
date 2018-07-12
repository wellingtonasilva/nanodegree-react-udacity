import React, { Component } from 'react';
import './App.css';
import { connect  } from 'react-redux';
import { loadZonaUrbana, createZonaUrbana } from './actions';

class App extends Component {

    createNew = () => {
        const zonaUrbana = {
            id: 1,
            descricao: this.input.value
        }
        this.props.createZonaUrbana(zonaUrbana)
    };

    render() {
        const { zonaUrbanas } = this.props;
        console.log(zonaUrbanas)

        return (
            <div className="App">
                <input type='text' ref={(input) => this.input = input}></input>
                <button onClick={this.createNew}>Create New</button>
                <ul>
                    {zonaUrbanas && zonaUrbanas.map(item => (
                        <li key={item.id}>{item.descricao}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const nomes = [
    {nome: 'Wellington'},
    {nome: 'Antonio'},
    {nome: 'Silva'}
];

function mapStateToProps(state) {
    console.log(state)
    return {
        nomes: nomes,
        zonaUrbanas: state.reducerZonaUrbana,
        servicoTipos: state.reducerServicoTipo
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadZonaUrbana: (list) => dispatch(loadZonaUrbana(list)),
        createZonaUrbana: (zonaUrbana) => dispatch(createZonaUrbana(zonaUrbana)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
