import {
    CLEAR_HOME_FORM,
    INPUT_HOME_FORM,
    HomeAction
} from './types';

export const inputHomeForm = (type: string, value: string): HomeAction => ({
    type: INPUT_HOME_FORM,
    payload: { type, value }
});

export const clearHomeForm = (): HomeAction => ({
    type: CLEAR_HOME_FORM,
    payload: undefined
});