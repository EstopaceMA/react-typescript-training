export interface DrawerState {
    activeForm: string;
}

export const SET_ACTIVE_FORM = 'set_active_form';
export interface SetActiveFormAction {
    type: typeof SET_ACTIVE_FORM;
    payload: { type: string; value: string; }
}

export type DrawerAction = SetActiveFormAction;