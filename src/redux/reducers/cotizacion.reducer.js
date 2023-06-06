import days from "dayjs";

import {
	FETCH_COTIZACION_PROCESS,
	FETCH_COTIZACION_SUCCESS,
	CREATE_COTIZACION_PROCESS,
	CREATE_COTIZACION_SUCCESS,
	RESET_COTIZACION,
} from "../constants";

const initialState = {
	cotizacion: {},
	isFetching: true,
};

export const cotizacion = (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_COTIZACION_PROCESS:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_COTIZACION_SUCCESS:
			return {
				...state,
				cotizacion: action.payload,
				isFetching: false,
			};
		case CREATE_COTIZACION_PROCESS:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_COTIZACION_SUCCESS:
			return {
				...state,
				cotizacion: action.payload,
				isFetching: false,
			};
		case RESET_COTIZACION:
			return {
				...state,
				cotizacion: {},
				isFetching: false,
			};
		default:
			return state;
	}
};
