import {
    CLEAR_HOME_FORM,
    INPUT_HOME_FORM,
    HomeState,
    HomeAction
} from './types';

const INITIAL_STATE: HomeState = {
    firstName: '',
    lastName: ''
}

const reducers = (state = INITIAL_STATE, action: HomeAction): HomeState => {
    switch(action.type) {
        case INPUT_HOME_FORM:
            return { ...state, [action.payload.type]: action.payload.value };
        case CLEAR_HOME_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default reducers;