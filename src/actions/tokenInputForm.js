import Eth from 'ethjs';

import _ from 'lodash';
import {ropsten as TEST_ABI, main as ABI} from '../config/abis';
import {ropsten as testAddress, main as address} from '../config/contractAddresses';

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

const isInteger = (x) => {
    x = parseFloat(x);
    return Math.round(x) === x;
}

const isAscii = (str) => str.match(/^[\u0020-\u007e]+$/);

const isValidTokenParams = ({name, symbol, totalSupply}) => {
    const result = {
        isValid: false
    };
    if (name === "" || name == null || !isAscii(name)) {
        result.errorType = 'name';
        return result;
    }

    if (symbol === "" || symbol === null || !isAscii(symbol)) {
        result.errorType = 'symbol';
        return result;
    }

    if (totalSupply <= 0 || !isInteger(totalSupply)) {
        result.errorType = 'totalSupply';
        return result;
    }

    result.isValid = true;

    return result;
}

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

            let result;
            try {
                const {name, symbol, totalSupply} = getState().tokenInputForm;
                const params = {name, symbol, totalSupply};


                console.log(params);

                // 入力された情報をバリデーションする
                const validation = isValidTokenParams(params);
                if (!validation.isValid) {
                    throw {code: 777, message: validation.errorType};
                }

                console.log(validation);

                const {account} = getState().metaMask;

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

                const toWei = Eth.toWei(totalSupply, 'ether');

                // contractのメソッドの呼び出し
                result = await tokenGenerator.generateToken(name, symbol, toWei, tx);

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

                if (_.includes(e.message, '-32603')) {
                    e.code = -32603;
                }

                switch (e.code) {
                    case -32603:
                        dispatch({
                            type: 'METAMASK_REJECT_ERROR'
                        });
                        break;

                    case 777:
                        dispatch({
                            type: 'INVALID_PARAMS',
                            payload: {param: e.message}
                        });
                        break;

                    default:
                        dispatch({
                            type: 'INTERNAL_SERVER_ERROR'
                        });
                        break;
                }
            }

            // 画面をローディング状態を解除
            dispatch({
                type: 'CHANGE_LOADING'
            });
        }
    };
};