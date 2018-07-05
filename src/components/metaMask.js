import React from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    typography: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

class MetaMask extends React.Component {


    // TODO web3, Ethの初期化処理
    componentWillMount() {

    }

    render () {

        const {classes} = this.props;


        return (
            <div className={classes.root}>
                <Typography variant="title" component="h2" className={classes.typography}>
                    MetaMask Locked等の表示とアイコン
                </Typography>

                ここに現在のMetaMaskのアドレスやネットワークの表示
            </div>

        );
    }

}

MetaMask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MetaMask);