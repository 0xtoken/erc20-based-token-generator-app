import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore';
import "typeface-roboto";


import Header from './containers/header'
import Home from './components/home';
import About from "./components/about";
import FAQ from "./components/faq";


// historyインスタンスの作成
const history = createBrowserHistory();

// storeの作成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQ} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
