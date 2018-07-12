import { connect } from "react-redux";

import MetaMask from '../components/metaMask';
import {syncEth, setIntervalId, setMetaMaskInstalledStatus} from '../actions/metaMask';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked,
        isMetaMaskInstalled: state.metaMask.isMetaMaskInstalled,
        account: state.metaMask.account,
        intervalId: state.metaMask.intervalId,
        network: state.metaMask.network,
        transactionInProgress: state.metaMask.transactionInProgress
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        syncEth: () => {
            dispatch(syncEth());
        },
        setIntervalId: (id) => {
            dispatch(setIntervalId(id));
        },
        setMetaMaskInstalledStatus: (status) => {
            dispatch(setMetaMaskInstalledStatus(status))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask);