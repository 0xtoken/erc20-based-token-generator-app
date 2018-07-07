import React from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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
    }

    componentDidMount() {

        // metaMaskがwindowにinjectしたweb3;
        const { web3 } = window;

        const {syncEth, setIntervalId} = this.props;

        // thisをselfにバインド
        const self = this;

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