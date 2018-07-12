import { connect } from "react-redux";

import Token from '../components/token';
import { checkTxHash } from '../actions/token';

const mapStateToProps = (state) => {
    return {
        txHash: state.token.transactionHash,
        address: state.token.tokenContractAddress,
        transactionInProgress: state.token.transactionInProgress,
        network: state.metaMask.network
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickCheckAddress: () => {
            dispatch(checkTxHash());
        },
        onCloseDialog: () => {
            dispatch({
                type: 'TRANSACTION_IN_PROGRESS'
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Token);