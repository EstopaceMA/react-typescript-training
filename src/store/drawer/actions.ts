import {
    SET_ACTIVE_FORM,
    DrawerAction
} from './types';

export const setActiveForm = (type: string, value:string): DrawerAction => ({
    type: SET_ACTIVE_FORM,
    payload: { type, value }
});