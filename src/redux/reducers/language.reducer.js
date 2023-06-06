import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';
import es from '../../locales/es/messages.json';

const initialState = {
  language: 'Spanish',
  messages: es,
};

export const language = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_LANGUAGE:
            return {
                ...state,
            };

        case CHANGE_LANGUAGE:
            const { language, messages } = action.payload;
            return {
                ...state,
                language: language,
                messages: messages
            };

        default:
            return state;
    }
};
