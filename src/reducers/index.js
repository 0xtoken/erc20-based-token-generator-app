import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import header from './header';

const reducers = combineReducers({
    header,
    // react-router-reduxのrouter
    router: routerReducer
});

export default reducers;