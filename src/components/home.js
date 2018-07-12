import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TokenInputForm from '../containers/tokenInputForm';
import MetaMask from '../containers/metaMask';
import Token from '../containers/token';

import {pink, teal} from '@material-ui/core/colors'

const mainNetwork = teal[800];
const ropstenNetwork = pink[700];

const styles = theme => ({
    root: {
        flexGrow: 1
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
    ropsten: {
        color: ropstenNetwork
    },
    main: {
        color: mainNetwork
    }
});


class Home extends React.Component {
    render() {

        const {classes, isMetaMaskLocked} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>

                        <Grid container item spacing={0} justify="center" className={classes.paper} >
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>

                                    <Typography variant="display1" component="h2" className={classes.typography}>
                                        Token Generator
                                    </Typography>

                                    <Typography variant="Subheading" component="h2" className={classes.typography}>
                                        Available On
                                    </Typography>


                                    <div className={classes.main}>
                                        Main Ethereum Network
                                    </div>
                                    <div className={classes.ropsten}>
                                        Ropsten Test Network
                                    </div>

                                    <MetaMask/>

                                    <Grid container item justify="center">
                                        <Grid item xs={12} sm={6}>
                                            <TokenInputForm />
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid container item spacing={0} justify="center" className={classes.paper} >
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <Token/>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </div>

        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);