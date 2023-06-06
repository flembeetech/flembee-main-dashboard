import { configureStore } from '@reduxjs/toolkit';

import {
    apiMdl,
    cotizacionMdl,
    languageMdl,
    parentescosMdl,
    informacionSaludMdl,
    uploadsMdl,
    userMdl
} from './middlewares';
import { rootReducer } from './reducers';

if (process.env.NODE_ENV !== 'production') {
    // middleware.push();
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...cotizacionMdl,
        ...languageMdl,
        ...parentescosMdl,
        ...informacionSaludMdl,
        ...uploadsMdl,
        ...userMdl,
        apiMdl
    ]
  })
