import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    	Reducer: Reducer
    }),
    compose(middleware)
);

export default store;