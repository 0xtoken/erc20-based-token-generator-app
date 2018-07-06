const initialState =  {
    isMetaMaskLocked: true,
    web3: undefined
};

const metaMask = (state = initialState, action) => {
    switch(action.type) {
        case 'UNLOCK':
            return {
                ...state,
                isMetaMaskLocked: false,
                web3: action.payload.web3
            };
        case 'LOCK':
            return {
                isMetaMaskLocked: true,
                web3: undefined
            };
        default:
            return state;
    }
};

export default metaMask;