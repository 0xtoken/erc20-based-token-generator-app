import Eth from 'ethjs';

import {ropsten as TEST_ABI, main as ABI} from '../config/abis';
import {ropsten as testAddress, main as address } from '../config/contractAddresses';

/**
 * feeを取得
 * @returns {Promise<any>}
 */
const getFee = async (tokenGenerator) => {
    return new Promise((resolve, reject) => {

        tokenGenerator.fee((err, result) => {
            if (err) return reject(err);

            resolve(result);
        });
    });
};


export const change = ({type, value}) => {
    return {
        type,
        payload: {value: value}
    }
};


export const submit = () => {
    return async (dispatch, getState) => {

        const {web3} = window;
        const eth = new Eth(web3.currentProvider);

        let tokenGenerator;

        switch (getState().metaMask.network) {
            case 'MAIN_ETHEREUM_NETWORK':
                tokenGenerator = eth.contract(ABI).at(address);
                break;

            case 'ROPSTEN_TEST_NETWORK':
                tokenGenerator = eth.contract(TEST_ABI).at(testAddress);
                break;

            default:
                tokenGenerator = null;
                break;
        }

        // 対応するネットワークにいる場合
        if (tokenGenerator) {
            // 画面をローディング状態にする
            dispatch({
                type: 'CHANGE_LOADING'
            });


            // TODO ここでバリデーションするか、もしくはバリデーション済みのものが渡ってくる前提にするかどうか
            const {name, symbol, totalSupply} = getState().tokenInputForm;
            const {account} = getState().metaMask;


            let result;
            try {

                const fee = await getFee(tokenGenerator);

                console.log('fee price');
                console.log(Eth.fromWei(fee[0], 'ether').toString());

                const gas = await eth.gasPrice();

                console.log('gas gwei');
                const gasPriceInGwei = Eth.fromWei(gas, 'gwei');
                console.log(gasPriceInGwei.toString());

                // transaction objectの作成
                const tx = {
                    from: account,
                    value: fee[0],
                    gasPrice: (gas * 2).toString()
                };

                // contractのメソッドの呼び出し
                result = await tokenGenerator.generateToken(name, symbol, totalSupply, tx);

                // 成功状態に変更
                dispatch({
                    type: 'CHANGE_SUCCESS',
                    payload: {status: true}
                });

                // tokenのStateに保存
                dispatch({
                    type: 'SET_TRANSACTION_HASH',
                    payload: {transactionHash: result}
                });

            } catch (e) {
                // TODO エラー関連のアクションをディスパッチする
                console.log(e);
            }

            // 画面をローディング状態を解除
            dispatch({
                type: 'CHANGE_LOADING'
            });
        } else {
            // TODO　対応するnetworkに行くようにダイアログを出す
        }
    };
};