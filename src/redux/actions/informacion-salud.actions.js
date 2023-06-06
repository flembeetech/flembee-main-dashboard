import {
    FETCH_EDAD_MAX_PROCESS_PROCESS,
} from '../constants';

const getEdadMaxAdmisionProcess = (payload) => ({
    type: FETCH_EDAD_MAX_PROCESS_PROCESS,
    payload,
});

export {
    getEdadMaxAdmisionProcess,
};
