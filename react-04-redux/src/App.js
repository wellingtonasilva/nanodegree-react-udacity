import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createZonaUrbana, loadZonaUrbana } from './actions';

class App extends Component {

    state = {
        zonaUrbanas: []
    }

    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            this.setState(() => ({
                zonaUrbanas: store.getState()
            }));
        });
    }

    load = () => {
        this.props.store.dispatch(loadZonaUrbana(
            [{id: 1, descricao: 'Zona 1'},{id: 2, descricao: 'Zona 2'}]
        ));
    }

    create = () => {
        const zonaUrbana ={
            id: this.state.zonaUrbanas.length + 1,
            descricao: this.input.value
        };
        console.log(zonaUrbana);
        this.props.store.dispatch(createZonaUrbana(zonaUrbana));
    }

  render() {
      const { zonaUrbanas } = this.state;
      console.log(zonaUrbanas);
    return (
      <div className="App">
        <input type='text' ref={(input) => this.input = input}></input>
        <button onClick={this.create}>Create New</button>
        <ul>
        {zonaUrbanas.map(item => (
            <li key={item.id}>{item.descricao}</li>
        ))}
        </ul>
        <button onClick={this.load}>Load</button>
      </div>
    );
  }
}

export default App;
