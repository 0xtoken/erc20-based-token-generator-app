import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import topImage from '../assets/eth_material.svg'
import TokenInputForm from '../containers/tokenInputForm';

import Button from '@material-ui/core/Button';


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
    backgroundImage: `url(${topImage})`,
    backgroundSize: 'cover'
}

const  TopImage = ({ classes }) => {
    return (
        <div className={classes.root} style={backGroundStyle}>
            <Grid container spacing={24}>
                <Grid item xs={12}>

                    <Grid container item spacing={0} justify="center" className={classes.paper} >
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>

                                <Typography variant="display2" component="h2" className={classes.typography}>
                                    Original ERC20 Based Token Generator

                                </Typography>

                                MetaMaskのエクステンションが利用可能なブラウザでオリジナル暗号通貨（ERC20トークン）を作成できるツールです。<br/><br/>
                                プログラミング等の知識を必要とせず、手順に従うことで簡単にオリジナル暗号通貨を作成することができます。<br/><br/>

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

TopImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopImage);