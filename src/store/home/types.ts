export interface HomeState {
    firstName: string;
    lastName: string;
}

export const INPUT_HOME_FORM = 'input_home_form';
export interface InputHomeFormAction {
    type: typeof INPUT_HOME_FORM;
    payload: { type: string; value: string; }
}

export const CLEAR_HOME_FORM = 'clear_home_form';
export interface ClearHomeFormAction {
    type: typeof CLEAR_HOME_FORM;
    payload: undefined
}

export type HomeAction = InputHomeFormAction | ClearHomeFormAction;

