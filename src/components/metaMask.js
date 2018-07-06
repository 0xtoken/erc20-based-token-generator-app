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

    constructor(props) {
        super(props);

        // web3の初期化処理
        props.initializeWeb3();
    }

    // TODO web3, Ethの初期化処理
    componentWillMount() {

        const {isMetaMaskLocked, web3} = this.props;

        setInterval(async function () {
            if (!eth || eth.accounts[0] !== window.account) {
                console.log("Account changed");
                window.account = window.web3.eth.accounts[0];
            }
        }, 300);

    }

    // TODO clear interval
    componentWillUnmount() {

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