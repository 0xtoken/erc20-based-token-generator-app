import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import metaMask from './metaMask';
import token from './token';
import tokenInputForm from './tokenInputForm';

const reducers = combineReducers({
    metaMask,
    token,
    tokenInputForm,

    // react-router-reduxのrouter
    router: routerReducer,
});

export default reducers;