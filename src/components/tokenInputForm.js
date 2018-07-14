import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    liner: {
        flexGrow: 1
    },
    submitField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600
    }
});

class TextFields extends React.Component {

    handleChange = name => event => {
        this.props.handleChange({
            type: name,
            value: event.target.value
        });

    };

    handleSubmit = (state) => () => {
        this.props.handleSubmit(state);
    };

    render() {
        const {classes, loading, success, isMetaMaskInstalled, currentNetwork, error, handleErrorReset} = this.props;

        const isError = !!error;
        let errorTitle, errorMessage = ['', ''];

        if (isError) {
            switch (error.type) {
                case 'INVALID_PARAM':
                    errorTitle = '入力されたパラメータが正しくありません。';
                    errorMessage = `${error.param}の値が正しくありません。`;
                    break;

                case 'METAMASK_REJECT_ERROR':
                    errorTitle = 'MetaMaskエラー';
                    errorMessage = `MetaMaskでトランザクション処理が拒否されました。`;
                    break;

                case 'INTERNAL_SERVER_ERROR':
                    errorTitle = 'サーバーエラーが発生しました。';
                    errorMessage = `問題が発生しました。時間を置いて再度お試しください。`;
                    break;
                default:
                    errorTitle = 'INTERNAL SERVER ERROR';
                    errorMessage = `問題が発生しました。時間を置いて再度お試しください。`;
                    break;
            }
        }

        const isOnValidNetwork =
            currentNetwork === 'MAIN_ETHEREUM_NETWORK' || currentNetwork === 'ROPSTEN_TEST_NETWORK';

        return (
            <div>
                <Dialog
                    open={isError}
                    onClose={handleErrorReset}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{errorTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {errorMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleErrorReset} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>


                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="name"
                        label="NAME"
                        placeholder="TOKENGENCOIN"
                        type="string"
                        className={classes.textField}
                        margin="normal"
                        onChange={this.handleChange('CHANGE_NAME')}
                        disabled={!isOnValidNetwork || success}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="symbol"
                        label="SYMBOL"
                        placeholder="TGN"
                        type="string"
                        className={classes.textField}
                        onChange={this.handleChange('CHANGE_SYMBOL')}
                        margin="normal"
                        disabled={!isOnValidNetwork || success}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="totalSupply"
                        label="TOTAL SUPPLY"
                        placeholder={1000}
                        onChange={this.handleChange('CHANGE_TOTAL_SUPPLY')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        disabled={!isOnValidNetwork || success}
                    />
                    <div className={classes.submitField}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handleSubmit()}
                            disabled={!isMetaMaskInstalled || !isOnValidNetwork || loading || success}
                        >
                            {!isMetaMaskInstalled ? 'INSTALL METAMASK FIRST!' : !success ? 'SUBMIT' : 'Go to CHECK TOKEN ADDRESS'}
                            <Icon className={classes.rightIcon}>send</Icon>
                        </Button>
                        {(() => {
                            if (loading) {
                                return (
                                    <div className={classes.liner}>
                                        <LinearProgress color="secondary"/>
                                        <br/>
                                    </div>
                                );
                            }
                        })()}
                    </div>
                </form>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
