import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
}from 'redux';

import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from './reducers';

export default (history) => {
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            // react-router-reduxのrouter
            router: routerReducer
        }),
        applyMiddleware(
            logger,
            // react-router-reduxのRedux MiddleWare
            routerMiddleware(history))
    );
}