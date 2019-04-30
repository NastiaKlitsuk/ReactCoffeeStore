import { createStore, applyMiddleware } from 'redux';
import { menuReducer, initialMenuState } from './menu/menu.reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(menuReducer, initialMenuState, applyMiddleware(...middlewares));
export default store;
