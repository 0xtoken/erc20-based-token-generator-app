import React from 'react';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';



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
        color: theme.palette.text.secondary,
    },
    card: {
        display: 'flex',
        align: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 200,
        height: 200,
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    controls: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        justifyContent: 'center'

    },
    input: {
        display: 'none'
    },
    icon: {
        width: 'inherit',
        height: 'inherit'
    },
    button: {
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
});

const jump = (type) => {
    return () => {
        switch (type) {
            case 'twitter':
                return window.open("https://twitter.com/________saotome", "_blank");
            case 'blog':
                return window.open("https://madoka-saotome.com", "_blank");
            case 'github':
                return window.open("https://github.com/7madoka", "_blank");
            default:
                return window.open("https://token-generator.com", "_blank");
        }
    }
};

const Top = ({classes}) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.paper}>

                <Grid item xs={12}>
                    <Grid container item spacing={0} justify="center" className={classes.paper}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>

                                <Typography variant="display2" component="h1" className={classes.typography}>
                                    Token Generator
                                </Typography>
                                <div className={classes.typographyText}>
                                    このサイトでは、PCのブラウザ上でオリジナル暗号通貨（Ethereum ERC20トークン）を作成することができます。<br/><br/>
                                    プログラミング等の知識を必要とせず、手順に従うことで簡単にオリジナル暗号通貨を作成することができます。<br/><br/>
                                </div>

                                <Typography variant="display1" component="h2" className={classes.typography}>
                                    Smart Contract
                                </Typography>
                                ERC20トークンの実体はスマートコントラクトです。<br/><br/>
                                そしてこちらのツール自体もスマートコントラクトで作られています。<br/><br/>
                                つまり「スマートコントラクトでスマートコントラクトを生成する」ツールです。<br/><br/>
                                このツールにより、多くの人々が簡単にオリジナルのトークンを作成・配布することが可能になります。<br/><br/>
                                皆様が持っている面白いアイディアを素早く実証実験することの手助けになるでしょう。<br/><br/>

                                <Button variant="contained" color="primary" className={classes.button} component={Link} to="/generate-tokens">
                                    Let's generate!
                                </Button>

                            </Paper>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container item spacing={2} justify="center" className={classes.paper}>
                    <Grid item xs={6} sm={3}>

                        <Paper className={classes.paper}>

                            <Typography variant="display1" component="h2" className={classes.typography}>
                                Developer
                            </Typography>

                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="/static/icon.png"
                                    title="Live from space album cover"
                                />

                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography variant="headline">Madoka Saotome</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                            Software Engineer <br/>in Japan
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                        <IconButton className={classes.button} aria-label="github" onClick={jump('github')}>
                                            <img src="/static/github-circle.svg" className={classes.icon}/>
                                        </IconButton>
                                        <IconButton className={classes.button} aria-label="twitter" onClick={jump('twitter')}>
                                            <img src="/static/twitter-circle.svg" className={classes.icon} />
                                        </IconButton>
                                        <IconButton className={classes.button} aria-label="blog" onClick={jump('blog')}>
                                            <img src="/static/account-circle.svg" className={classes.icon}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={3}>

                        <Paper className={classes.paper}>

                            <Typography variant="display1" component="h2" className={classes.typography}>
                                Disclaimer
                            </Typography>
                            このツールを使用して発生した損害等について作者は一切の責任を負うことができません。あらかじめご了承の上ご利用ください。<br/><br/>
                            また、Ethereumネットワークの混雑状況等の影響により、トークン作成までに時間を要したり、トークン作成に失敗することもあります。<br/><br/><br/>
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
};

Top.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);