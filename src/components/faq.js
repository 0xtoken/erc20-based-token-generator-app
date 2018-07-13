import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    typographyEx: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

const FaQ = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.paper}>
                <Grid item xs={12}>

                    <Grid container item spacing={0} justify="center" className={classes.paper} >
                        <Grid item xs={12} sm={6}>


                            <Paper className={classes.paper}>

                                <Typography variant="display2" component="h2" className={classes.typography}>
                                    FAQ
                                </Typography>

                                よくお問い合わせいただくものに対して回答しています。<br/><br/>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>スマホで動作しますか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                            しません。MetaMaskというPCのブラウザのChrome等で動作するエクステンションが動作する環境でのみ動作します。<br />
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>MetaMaskとは何ですか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                            MetaMaskとはブラウザのエクステンションで主要なイーサリアムウォレットの一つです。<br/>
                                            セキュリティレベルが高いことでも有名で利用される方は多いです。<br />

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>このサイトはどのEthereumネットワークに対応していますか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                           現在はメインネットワークとRopstenのテストネットワークに対応しています。<br/>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>トークン情報を入力するフォームが表示されません。</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                            未対応のネットワークに接続しているためです。現在はメインネットワークとRopstenのテストネットワークに対応しています。<br/>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
};

FaQ.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaQ);