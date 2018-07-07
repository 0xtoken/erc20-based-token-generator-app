import {getSelectedAccount, checkWeb3} from '../apis/web3';
import Eth from 'ethjs';

export const syncEth = () => {
    return (dispatch, getState) => {
        // metaMaskがwindowにinjectしたweb3
        const {web3} = window;

        // stateの初期化処理
        const initialState = (typeof web3 !== 'undefined') ?
            {type: 'INSTALLED', payload: {isMetaMaskInstalled: true}}
            : {type: 'NOT_INSTALLED'};
        dispatch(initialState);

        // MetaMaskがインストールされており、metaMaskがログイン状態の場合 ethをセットしてUNLOCK状態にする
        if (getState().metaMask.isMetaMaskInstalled && web3.eth.accounts[0] !== undefined) {
            dispatch({type: 'UNLOCKED', payload: {account: web3.eth.accounts[0], isMetaMaskLocked: false}})

            // TODO ここでwindowにもたせるということをしても良いのか

        } else {
            dispatch({type: 'LOCKED'});
        }
    }
};


export const setIntervalId = (intervalId) => {
  return {
      type: 'SET_INTERVAL_ID',
      payload: {
          id: intervalId
      }
  }
};
