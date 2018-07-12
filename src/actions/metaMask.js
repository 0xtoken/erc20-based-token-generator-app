const getNetwork = (web3) => {
    return new Promise((resolve, reject) => {
        web3.version.getNetwork((err, netId) => {

            if (err) return reject(err);

             switch (netId) {
                case "1":
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'MAIN_ETHEREUM_NETWORK'}
                    });
                case "2":
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'DEPRECATED_MODERN_TEST_NETWORK'}
                    });
                case "3":
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'ROPSTEN_TEST_NETWORK'}
                    });
                case "4":
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'RINKEBY_TEST_NETWORK'}
                    });
                case "42":
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'KOVAN_TEST_NETWORK'}
                    });
                default:
                    return resolve({
                        type: 'SET_NETWORK',
                        payload: { network: 'UNKNOWN'}
                    });
            }
        })
    });
};

export const syncEth = () => {
    return async (dispatch, getState) => {

        const {web3} = window;

        // stateの初期化処理
        const initialState =
            typeof web3 !== 'undefined' ? {type: 'INSTALLED'} : {type: 'NOT_INSTALLED'};

        dispatch(initialState);

        // MetaMaskがインストールされており、metaMaskがログイン状態の場合 ethをセットしてUNLOCK状態にする
        if (getState().metaMask.isMetaMaskInstalled && web3.eth.accounts[0] !== undefined) {
            dispatch({type: 'UNLOCKED', payload: {account: web3.eth.accounts[0], isMetaMaskLocked: false}})
        } else {
            dispatch({type: 'LOCKED'});
        }

        const network = await getNetwork(web3);
        dispatch(network);
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

export const setMetaMaskInstalledStatus = (status) => {
    return {
        type: status
    }
}
