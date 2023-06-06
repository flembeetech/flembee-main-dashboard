import { combineReducers } from '@reduxjs/toolkit';

import { language } from './language.reducer';
import { cotizacion } from './cotizacion.reducer';
import { parentescos } from './parentesco.reducer';
import { informacionSalud } from './informacion-salud.reducer';
import { notification } from './notification.reducer';
import { ui } from './ui.reducer';
import { uploads } from './uploads.reducer';
import { user } from './user.reducer';

export const rootReducer = combineReducers({
    language,
    cotizacion,
    parentescos,
    informacionSalud,
    notification,
    ui,
    uploads,
    user,
});
