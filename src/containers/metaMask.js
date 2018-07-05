import { connect } from "react-redux";

import MetaMask from '../components/metaMask';
import {initialize, fetchUser} from '../actions/metaMask';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked,
        currentAddress: state.metaMask.currentAddress,
        currentNetwork: state.metaMask.currentNetwork,
        eth: state.metaMask.eth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initializeEth: () => {
            dispatch(initialize());
        },
        fetchUser: () => {
            dispatch(fetchUser());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask);