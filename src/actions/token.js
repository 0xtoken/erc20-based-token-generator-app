import Eth from "ethjs";
import _ from 'lodash';

export const checkTxHash = () => {

    const {web3} = window;
    const eth = new Eth(web3.currentProvider);

    return async (dispatch, getState) => {

        const txHash = getState().token.transactionHash;

        const receipt = await eth.getTransactionReceipt(txHash);

        const address = _.get(receipt, ['logs', 0, 'address'], undefined);

        if (!_.isUndefined(address)) {
            dispatch({
                type: 'SET_CONTRACT_ADDRESS',
                payload: { tokenContractAddress: address }
            });
        } else {
            dispatch({
                type: 'TRANSACTION_IN_PROGRESS'
            })
        }
    }
};