import { combineReducers, createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import homeReducer from './home/reducers';
import drawerReducer from './drawer/reducers';

const rootReducer = combineReducers({
    home: homeReducer,
    drawer: drawerReducer
});

export type AppState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void | any, AppState, null, AnyAction>

export default createStore(rootReducer, applyMiddleware(thunk));
