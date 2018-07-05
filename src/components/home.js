import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import TokenInputForm from '../containers/tokenInputForm';
import MetaMask from '../containers/metaMask';


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

                                    <Typography variant="display2" component="h2" className={classes.typography}>
                                        Original ERC20 Token Generator

                                    </Typography>

                                    MetaMaskを利用してオリジナル暗号通貨（ERC20トークン）を作成できるツールです。<br/><br/>
                                    プログラミング等の知識は一切必要ありません。<br/><br/>
                                    手順に従うことで簡単にオリジナル暗号通貨を作成することができます。<br/><br/>

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

                                    <Typography variant="display2" component="h2" className={classes.typography}>
                                        Transaction Hash
                                    </Typography>

                                    Transaction Hash will appear here!<br/><br/>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        CHECK TOKEN ADDRESS
                                    </Button>

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