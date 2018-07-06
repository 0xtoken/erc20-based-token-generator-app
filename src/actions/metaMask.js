import {getSelectedAccount, checkWeb3} from '../apis/web3';
import Web3 from 'web3';

export const initializeWeb3 = () => {
    return (dispatch, getState) => {
        // stateに保存されているweb3

        // TODO そもそも初期化処理いらないんじゃないかな？
        const web3 = getState().web3;
        let output = (typeof web3 !== 'undefined') // web3 given by metamask
            ? {type: 'UNLOCK', payload: {web3: new Web3(web3.currentProvider), isMetaMaskLocked: false}}
            : {type: 'LOCK', payload: {web3: null, isMetaMaskLocked: true}};
        dispatch(output);
    }
};

export const fetchUser = () => {
    return dispatch => {
        // TODO ethの初期化処理
    }
};

