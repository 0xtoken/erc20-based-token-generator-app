import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    media: {
        maxWidth:1280
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    typography: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
    }
});

const  TopImage = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.paper}>
                <Grid item xs={12}>
                    <CardMedia
                        className={classes.media}
                        image="/static/top.jpg"
                        title="Contemplative Reptile"
                    />

                    <Typography variant="headline" component="h2" className={classes.typography}>
                        Generate Your Original ERC20 Based Token
                    </Typography>

                    このサイトではブラウザ上でオリジナル暗号通貨（Ethereum ERC20トークン）を作成できるツールを提供しています。<br/><br/>
                    プログラミング等の知識を必要とせず、手順に従うことで簡単にオリジナル暗号通貨を作成することができます。<br/><br/>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
            </Grid>
        </div>

    );
}

TopImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopImage);