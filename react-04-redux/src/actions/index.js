export const CREATE_ZONA_URBANA = "CREATE_ZONA_URBANA";
export const LOAD_ZONA_URBANA = "LOAD_ZONA_URBANA";
export const CREATE_SERVICO_TIPO = "CREATE_SERVICO_TIPO";
export const LOAD_SERVICO_TIPO = "LOAD_SERVICO_TIPO";

export const loadZonaUrbana = (list) => ({
    type: LOAD_ZONA_URBANA,
    list: list
});

export const createZonaUrbana = (zonaUrbana) => ({
    type: CREATE_ZONA_URBANA,
    zonaUrbana: zonaUrbana
});

export const loadServicoTipo = (list) => ({
    type: LOAD_SERVICO_TIPO,
    list: list
});

export const createServicoTipo = (servicoTipo) => ({
    type: CREATE_SERVICO_TIPO,
    servicoTipo: servicoTipo
})
