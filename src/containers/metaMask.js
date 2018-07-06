import { connect } from "react-redux";

import MetaMask from '../components/metaMask';
import {initializeWeb3, fetchUser} from '../actions/metaMask';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked,
        web3: state.metaMask.web3
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initializeWeb3: () => {
            dispatch(initializeWeb3());
        },
        fetchUser: () => {
            dispatch(fetchUser());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask);