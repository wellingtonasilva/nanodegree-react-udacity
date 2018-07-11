import { LOAD_ZONA_URBANA, CREATE_ZONA_URBANA } from '../actions'

export default function reducerZonaUrbana(state = [{id: 0, descricao: 'Nao definido', abreviado: 'ND'}], action) {
    switch (action.type) {
        case LOAD_ZONA_URBANA:
            return action.list;
        case CREATE_ZONA_URBANA:
            return [...state, action.zonaUrbana];
        default:
            return state;
    }
}
