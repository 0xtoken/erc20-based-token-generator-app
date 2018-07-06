

// MetaMaskで現在選択しているアカウントを取得する
export const getSelectedAccount = async(web3) => {
    return await new Promise((resolve, reject) => {
        web3.eth.getAccounts((error, result) => {
            return error ? reject(error) : resolve(result[0])
        })
    })
};

// MetaMaskで現在選択されているネットワークを取得する
const getSelectedNetwork = async (web3) => {
    return await new Promise((resolve, reject) => {
        web3.version.getNetwork((error, result) => {
            return error ? reject(error) : resolve(result)
        })
    })
};

/**
 * MetaMaskのログイン状況・ネットワーク状況を確認する
 * @param web3
 * @param network
 * @param account
 * @returns {Promise<void>}
 */
export const checkWeb3 = async (web3, network = null, account = null) => {

    // web3 がinjectされていない場合
    if (typeof web3 !== 'object' || web3 === null) {
        throw new Error(`Can't find Web3 injected object!`)
    }

    // 指定したnetworkと現在のネットワークが一致していない
    if (![undefined, null, false].includes(network) && parseInt(await getSelectedNetwork(web3)) !== network) {
        throw new Error(`Web3's selected network is not the same as given (${network})!`)
    }

    // 指定したアカウントと現在のアカウントが一致していない
    if (! [undefined, null, false].includes(account) && await getSelectedAccount(web3) !== account)　{
        throw new Error(`Web3's selected account is not the same as given (${account})!`)
    }
}
