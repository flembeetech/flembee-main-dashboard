import {
    FETCH_EDAD_MAX_PROCESS_PROCESS,
    FETCH_EDAD_MAX_PROCESS_SUCCESS,
} from '../constants';

const initialState = {
    edadMaxAdmision: 0,
    isFetching: true,
};

export const informacionSalud = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_EDAD_MAX_PROCESS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_EDAD_MAX_PROCESS_SUCCESS:
            return {
                ...state,
                edadMaxAdmision: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};
