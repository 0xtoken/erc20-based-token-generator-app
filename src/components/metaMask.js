import React from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {red, lightBlue} from '@material-ui/core/colors'

const notLoggedIn = red[500];
const loggedIn = lightBlue[500];

const styles = theme => ({
    root: {
        flexGrow: 1
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
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    addressLoggedIn: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: loggedIn
    },
    addressNotLoggedIn: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: notLoggedIn
    }
});

class MetaMask extends React.Component {

    componentDidMount() {

        // metaMaskがwindowにinjectしたweb3;
        const { web3 } = window;

        const {syncEth, setIntervalId, setMetaMaskInstalledStatus} = this.props;

        // thisをselfにバインド
        const self = this;

        // MetaMaskのインストール状況を初期化
        if (web3) {
            // web3が存在する場合はMetaMaskがインストールされているということ
            setMetaMaskInstalledStatus('INSTALLED');
        }

        // 定期的にMetaMaskがinjectしたweb3情報を取得しStateに保存した情報と差異がないか確認する
        const accountInterval = setInterval(function() {
            // metaMaskがwindowにinjectしたweb3があった場合
            if (web3) {

                // 現在stateに保存されているAccount
                const account =  self.getAccount();
                // 現在MetaMaskがinjectしたアカウント
                const currentAccount = web3.eth.accounts[0];

                // Stateに保存されているMetaMask情報を初期化して再設定を行う
                if (currentAccount !== account) {
                    syncEth();
                }
            } else {
                setMetaMaskInstalledStatus('NOT_INSTALLED');
            }

        }, 300);

        // intervalのIDをUnmount時に開放するために保持する
        if (accountInterval !== undefined || accountInterval !== null) {
            setIntervalId(accountInterval);
        }
    }

    componentWillUnmount() {
        // setIntervalが実行中の場合は停止する
        const {intervalId, setIntervalId} = this.props;
        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    getAccount() {
        return this.props.account;
    }

    render () {

        const {classes, account, network, isMetaMaskInstalled} = this.props;
        const addressClass = account ?
            classes.addressLoggedIn : classes.addressNotLoggedIn;

        return (
            <div className={classes.root}>
                <Typography variant="Subheading" component="h4" className={classes.typography}>
                    Your Current Address
                </Typography>
                <div className={addressClass}>
                    {isMetaMaskInstalled ? account ? account : 'METAMASK NOT LOGGED IN!' : 'INSTALL METAMASK FIRST!'}
                </div>
                <Typography variant="Subheading" component="h4" className={classes.typography}>
                    Your Current Network
                </Typography>
                <div className={addressClass}>
                    {network}
                </div>
            </div>);
    }
};

MetaMask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MetaMask);