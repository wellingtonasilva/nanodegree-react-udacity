import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect  } from 'react-redux';
import { loadZonaUrbana, createZonaUrbana, loadServicoTipo } from './actions';
import { bindActionCreators } from 'redux'

class App extends Component {
    state = {
        zonaUrbanas: [],
        store: new Object()
    }

    componentDidMount() {
    }

    createNew = () => {
        const zonaUrbana = {
            id: 1,
            descricao: this.input.value
        }
        this.props.createZonaUrbana(zonaUrbana).subscribe(() => {
            console.log("oiiii");
        });
    };

    render() {
        const { zonaUrbanas } = this.props;
        console.log("render", zonaUrbanas);

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

function mapStateToProps({zonaUrbanas, servicoTipos}) {
    return {
        zonaUrbanas: zonaUrbanas,
        nomes: nomes,
        servicoTipos: servicoTipos
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadZonaUrbana: (list) => dispatch(loadZonaUrbana(list)),
        createZonaUrbana: (zonaUrbana) => dispatch(createZonaUrbana(zonaUrbana)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
