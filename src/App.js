import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles/index";

import BackGroundImage from './assets/eth_material.svg'


import Home from './containers/home';
import Header from './containers/header'
import About from "./components/about";
import FAQ from "./components/faq";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    typography: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const backGroundStyle  = {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${BackGroundImage})`,
    backgroundSize: 'cover'
};

class App extends Component {
    render() {
        return (
            <div className="App" style={backGroundStyle}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/faq" component={FAQ} />
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);