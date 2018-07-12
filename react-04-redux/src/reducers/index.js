import { combineReducers } from 'redux';
import {
    LOAD_ZONA_URBANA,
    CREATE_ZONA_URBANA,
    LOAD_SERVICO_TIPO,
    CREATE_SERVICO_TIPO
} from '../actions'

function reducerZonaUrbana(state = [{id: 0, descricao: 'Nao definido', abreviado: 'ND'}], action) {
    switch (action.type) {
        case LOAD_ZONA_URBANA:
            return action.list;
        case CREATE_ZONA_URBANA:
            console.log("Create...", [...state, action.zonaUrbana]);
            return [...state, action.zonaUrbana];
        default:
            return state;
    }
}

function reducerServicoTipo(state = [], action) {
    switch (action.type) {
        case LOAD_SERVICO_TIPO:
            return action.list;
        case CREATE_SERVICO_TIPO:
            return [...state, action.servicoTipo];
        default:
            return state;
    }
}

export default combineReducers({
    reducerZonaUrbana,
    reducerServicoTipo
});
