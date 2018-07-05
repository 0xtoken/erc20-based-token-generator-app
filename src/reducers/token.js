const initialState =  {
    transactionHash: undefined,
    tokenContractAddress: undefined
};

const token = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TRANSACTION_HASH':
            return {
                ...state,
                transactionHash: action.payload.transactionHash

            };
        case 'SET_CONTRACT_ADDRESS':
            return {
                ...state,
                tokenContractAddress: action.payload.tokenContractAddress
            };
        default:
            return state;
    }
};

export default token;