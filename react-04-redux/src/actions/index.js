export const CREATE_ZONA_URBANA = "CREATE_ZONA_URBANA";
export const LOAD_ZONA_URBANA = "LOAD_ZONA_URBANA";

export const loadZonaUrbana = (list) => ({
    type: LOAD_ZONA_URBANA,
    list: list
});

export const createZonaUrbana = (zonaUrbana) => ({
    type: CREATE_ZONA_URBANA,
    zonaUrbana: zonaUrbana
});
