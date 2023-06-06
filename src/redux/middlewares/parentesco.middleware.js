import { message } from 'antd';

import {
    FETCH_PARENTESCOS_PROCESS,
    FETCH_PARENTESCOS_SUCCESS,
    FETCH_PARENTESCOS_ERROR,
    FETCH_PARENTESCO_PROCESS,
    FETCH_PARENTESCO_SUCCESS,
    FETCH_PARENTESCO_ERROR,
} from '../constants';

import {
    apiRequest,
    showMessageLoading, 
    hideMessage,
} from '../actions';

const URL = `${process.env.REACT_APP_API}/parentesco/`;

export const parentescosProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_PARENTESCOS_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_PARENTESCOS_SUCCESS,
                    FETCH_PARENTESCOS_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case FETCH_PARENTESCO_PROCESS:
            const { id } = action.payload;
            dispatch(
                apiRequest(
                    'GET',
                    `${URL}${id}`,
                    null,
                    FETCH_PARENTESCO_SUCCESS,
                    FETCH_PARENTESCO_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getParentescosSuccess = () => (next) => (action) => {
    next(action);
};

export const getParentescosError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_PARENTESCOS_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const getParentescoSuccess = () => (next) => (action) => {
    next(action);
};

export const getParentescoError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_PARENTESCO_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const parentescosMdl = [
    parentescosProcess,
    getParentescosSuccess,
    getParentescosError,
    getParentescoSuccess,
    getParentescoError,
];
