import days from 'dayjs';

import {
    FETCH_PARENTESCOS_PROCESS,
    FETCH_PARENTESCOS_SUCCESS,
    FETCH_PARENTESCO_PROCESS,
    FETCH_PARENTESCO_SUCCESS,
} from '../constants';

const initialState = {
    parentescos: [],
    isFetching: true,
    singleParentesco: {},
};

export const parentescos = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PARENTESCOS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_PARENTESCOS_SUCCESS:
            return {
                ...state,
                parentescos: action.payload.map((parentesco) => ({
                    ...parentesco,
                    createdAt: days(parentesco.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(parentesco.updatedAt).format('YYYY-MM-DD'),
                })).filter(pt => pt.id !== 1),
                isFetching: false,
            };
        case FETCH_PARENTESCO_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_PARENTESCO_SUCCESS:
            return {
                ...state,
                singleParentesco: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};
