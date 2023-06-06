import { message } from 'antd';

import {
    FETCH_COTIZACION_PROCESS,
    FETCH_COTIZACION_ERROR,
    FETCH_COTIZACION_SUCCESS,
    CREATE_COTIZACION_PROCESS,
    CREATE_COTIZACION_SUCCESS,
    CREATE_COTIZACION_ERROR,
} from '../constants';
import {
    apiRequest,
    showMessageLoading, 
    hideMessage,
} from '../actions';

const URL = `${process.env.REACT_APP_API}/cotizacion`;

export const cotizacionProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_COTIZACION_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_COTIZACION_SUCCESS,
                    FETCH_COTIZACION_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case CREATE_COTIZACION_PROCESS:
            dispatch(
                apiRequest(
                    'POST',
                    `${URL}/createQuote`,
                    action.payload,
                    CREATE_COTIZACION_SUCCESS,
                    CREATE_COTIZACION_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getCotizacionSuccess = () => (next) => (action) => {
    next(action);
};

export const getCotizacionError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_COTIZACION_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const createdCotizacionSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === CREATE_COTIZACION_SUCCESS) {
        message.success('Created success!', 1);
        dispatch(hideMessage());
    }
};

export const createdCotizacionError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_COTIZACION_ERROR) {
    }
};

export const cotizacionMdl = [
    cotizacionProcess,
    getCotizacionSuccess,
    getCotizacionError,
    createdCotizacionSuccess,
    createdCotizacionError,
];
