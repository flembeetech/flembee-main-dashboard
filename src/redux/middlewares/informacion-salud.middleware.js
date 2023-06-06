import { message } from 'antd';

import {
    FETCH_EDAD_MAX_PROCESS_PROCESS,
    FETCH_EDAD_MAX_PROCESS_SUCCESS,
    FETCH_EDAD_MAX_PROCESS_ERROR,
} from '../constants';

import {
    apiRequest,
    showMessageLoading, 
    hideMessage,
} from '../actions';

const URL = `${process.env.REACT_APP_API}/informacionSalud/getMaxAdmision`;

export const edadMaxAdmisionProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_EDAD_MAX_PROCESS_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_EDAD_MAX_PROCESS_SUCCESS,
                    FETCH_EDAD_MAX_PROCESS_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getEdadMaxAdmisionSuccess = () => (next) => (action) => {
    next(action);
};

export const getEdadMaxAdmisionError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_EDAD_MAX_PROCESS_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const informacionSaludMdl = [
    edadMaxAdmisionProcess,
    getEdadMaxAdmisionSuccess,
    getEdadMaxAdmisionError,
];
