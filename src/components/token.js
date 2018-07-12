import React from 'react';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {green, red, lightBlue} from '@material-ui/core/colors'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import copy from 'copy-to-clipboard';

const notHaveTxHash = red[500];
const hasTxHash = lightBlue[500];

const styles = theme => ({
    root: {
        flexGrow: 1
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
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    hasTxHash: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: hasTxHash
    },
    notHaveTxHash: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: notHaveTxHash,
    }
});

const Token = ({classes, txHash, address, transactionInProgress, onClickCheckAddress, onCloseDialog}) => {

    const txHashClass = txHash ?
        classes.hasTxHash : classes.notHaveTxHash;

    return (
        <div className={classes.root}>

            <Typography variant="display1" component="h2" className={classes.typography}>
                Transaction Hash
            </Typography>

            <div className={txHashClass}>
                {txHash || 'There is no Transaction Receipt!'}
            </div>


            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onClickCheckAddress}
                disabled={!!!txHash || address}
            >
                {!!address ? 'OPEN YOUR META MASK' : 'CHECK CONTRACT ADDRESS'}
            </Button>

            <Button
                variant="contained"
                color={green[500]}
                className={classes.button}
                onClick={() => {
                    copy(txHash);
                }}
                disabled={!!!txHash}
            >
                COPY TO CLIPBOARD
            </Button>

            <div>
                <Dialog
                    open={transactionInProgress}
                    onClose={onCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"時間を置いてからお試しください。"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Ethereumのネットーワーク状況により、トランザクションがブロックに取り込まれるまでに時間がかかっているようです。
                            ブラウザをリロードせずに、5分程経過したら再度お試しください。
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onCloseDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            {(() => {
                if (!!address) {
                    return (
                        <div>
                            <Typography variant="display1" component="h2" className={classes.typography}>
                                Contract Address
                            </Typography>

                            FAQのSTEP7以降の手順に従ってMetaMaskにTokenを登録しましょう。<br />

                            <div className={txHashClass}>
                                {address}
                            </div>

                            <Button
                                variant="contained"
                                color={green[500]}
                                className={classes.button}
                                onClick={() => {
                                    copy(address);
                                }}
                                disabled={!!!address}
                            >
                                COPY TO CLIPBOARD
                            </Button>
                        </div>
                    );
                }
            })()}

        </div>
    );

};

Token.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Token);