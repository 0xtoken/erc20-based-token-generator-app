import Eth from 'ethjs';

// TODO ここのネットワーク先をstateで管理したい　一旦ropstenのテストネットワークを向ける
import {ropsten as ABI} from '../config/abis';
import {ropsten as address} from '../config/contractAddresses';

const {web3} = window;
const eth = new Eth(web3.currentProvider);

// contractと接続する
const tokenGenerator = eth.contract(ABI).at(address);

/**
 * feeを取得
 * @returns {Promise<any>}
 */
const getFee = async () => {
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

        // TODO ここでバリデーションするか、もしくはバリデーション済みのものが渡ってくる前提にするかどうか
        const {name, symbol, totalSupply} = getState().tokenInputForm;
        const {account} = getState().metaMask;


        let result;
        try {

            const fee = await getFee();

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
        } catch (e) {

            // TODO エラー関連のアクションをディスパッチする
            console.log(e);
        }

        // tokenのStateに保存
        dispatch({
            type: 'SET_TRANSACTION_HASH',
            payload: {transactionHash: result}
        });
    };
};