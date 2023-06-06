import {
    FETCH_PARENTESCOS_PROCESS,
    FETCH_PARENTESCO_PROCESS,
} from '../constants';

const getParentescosListProcess = (payload) => ({
    type: FETCH_PARENTESCOS_PROCESS,
    payload,
});

const getParentescoProcess = (payload) => ({
    type: FETCH_PARENTESCO_PROCESS,
    payload,
});

export {
    getParentescosListProcess,
    getParentescoProcess,
};
