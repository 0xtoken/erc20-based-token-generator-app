import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles/index";

import Home from './containers/home';
import Header from './containers/header'
import About from "./components/about";
import FAQ from "./components/faq";
import STEPS from "./components/steps";
import TOP from "./components/top";

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
    },
    main: {
        color: theme.palette
    }
});


class App extends Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={TOP} />
                    <Route path="/about" component={About} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/steps" component={STEPS} />
                    <Route path="/generate-tokens" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);