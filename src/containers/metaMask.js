import { connect } from "react-redux";

import MetaMask from '../components/metaMask';
import {syncEth, setIntervalId} from '../actions/metaMask';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked,
        isMetaMaskInstalled: state.metaMask.isMetaMaskInstalled,
        account: state.metaMask.account,
        intervalId: state.metaMask.intervalId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        syncEth: () => {
            dispatch(syncEth());
        },
        setIntervalId: (id) => {
            dispatch(setIntervalId(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask);