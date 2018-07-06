import {
    createStore as reduxCreateStore,
    applyMiddleware,
    compose
}from 'redux';

import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// redux dev toolを導入する
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => {
    return reduxCreateStore(
        reducers,
        composeEnhancers(applyMiddleware(
            thunk,
            logger,
            // react-router-reduxのRedux MiddleWare
            routerMiddleware(history)))
    );
}