const initialState =  {
    isMetaMaskLocked: true,
    currentAddress: undefined,
    currentNetwork: undefined
};

const metaMask = (state = initialState, action) => {
    switch(action.type) {
        case 'UNLOCK':
            return {
                ...state,
                isMetaMaskLocked: false,
                currentAddress: action.payload.address,
                currentNetwork: action.payload.currentNetwork
            };
        case 'LOCK':
            return {
                isMetaMaskLocked: true,
                currentAddress: undefined,
                currentNetwork: undefined
            };
        default:
            return state;
    }
};

export default metaMask;