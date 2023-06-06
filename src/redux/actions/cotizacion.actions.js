import {
	FETCH_COTIZACION_PROCESS,
	CREATE_COTIZACION_PROCESS,
	RESET_COTIZACION,
} from "../constants";

const getCotizacionProcess = (payload) => ({
	type: FETCH_COTIZACION_PROCESS,
	payload,
});

const createCotizacion = (payload) => ({
	type: CREATE_COTIZACION_PROCESS,
	payload,
});

const resetCotizacion = () => ({
	type: RESET_COTIZACION,
});

export { getCotizacionProcess, createCotizacion, resetCotizacion };
