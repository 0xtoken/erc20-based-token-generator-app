import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import header from './header';
import tokenInputform from './tokenInputForm';

const reducers = combineReducers({
    header,
    tokenInputform,
    // react-router-reduxのrouter
    router: routerReducer,
});

export default reducers;