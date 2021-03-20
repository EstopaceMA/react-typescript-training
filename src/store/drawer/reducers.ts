import {
    SET_ACTIVE_FORM,
    DrawerAction,
    DrawerState
} from './types';

const INITIAL_STATE: DrawerState = {
    activeForm: 'Home'
}

const reducers = (state = INITIAL_STATE, action: DrawerAction): DrawerState => {
    switch(action.type) {
        case SET_ACTIVE_FORM:
            return { ...state, [action.payload.type]: action.payload.value };
        default:
            return state;
    }
}

export default reducers;