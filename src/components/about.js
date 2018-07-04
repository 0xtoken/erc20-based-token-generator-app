import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import PeopleIcon from '@material-ui/icons/PeopleOutline'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
    root: {
        flexGrow: 1,
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

const About = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="headline" component="h2" className={classes.typography}>
                        About
                    </Typography>
                    このサイトではブラウザ上でオリジナル暗号通貨（Ethereum ERC20トークン）を作成できるツールを提供しています。<br/><br/>
                    プログラミング等の知識を必要とせず、手順に従うことで簡単にオリジナル暗号通貨を作成することができます。<br/><br/>

                    <Typography variant="headline" component="h2" className={classes.typography}>
                        Smart Contract
                    </Typography>
                    ERC20トークンの実体はスマートコントラクトです。そしてこちらのツール自体もスマートコントラクトで作られています。<br/><br/>
                    つまり「スマートコントラクトでスマートコントラクトを生成する」ツールです。<br/><br/>
                    このツールにより、多くの人々が簡単にオリジナルのトークンを作成・配布することが可能になります。<br/><br/>
                    あなたの持っている面白いアイディアを素早く実証実験することの手助けになるでしょう。<br/><br/>
                    <Typography variant="headline" component="h2" className={classes.typography}>
                        Disclaimer
                    </Typography>
                    このツールを使用して発生した損害等について作者は一切の責任を負うことができません。あらかじめご了承の上ご利用ください。<br/><br/>
                    また、Ethereumネットワークの混雑状況等の影響により、トークン作成までに時間を要したり、トークン作成に失敗することもあります。<br/><br/>


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
};

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);