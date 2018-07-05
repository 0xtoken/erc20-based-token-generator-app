import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import header from './header';
import metaMask from './metaMask';
import token from './token';
import tokenInputForm from './tokenInputForm';

const reducers = combineReducers({
    metaMask,
    header,
    token,
    tokenInputForm,

    // react-router-reduxのrouter
    router: routerReducer,
});

export default reducers;