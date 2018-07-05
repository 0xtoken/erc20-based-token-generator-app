import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore';
import "typeface-roboto";

import App from './App';

// historyインスタンスの作成
const history = createBrowserHistory();

// storeの作成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
