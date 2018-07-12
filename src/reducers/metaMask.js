const initialState =  {
    isMetaMaskLocked: true,
    isMetaMaskInstalled: false,
    account: undefined,
    intervalId: null,
    network: undefined
};

const metaMask = (state = initialState, action) => {
    switch(action.type) {
        case 'UNLOCKED':
            return {
                ...state,
                isMetaMaskLocked: false,
                account: action.payload.account
            };
        case 'LOCKED':
            return {
                ...state,
                isMetaMaskLocked: true,
                account: undefined
            };

        case 'INSTALLED':
            return {
                ...state,
                isMetaMaskInstalled: true
            };

        case 'NOT_INSTALLED':
            return initialState;

        case 'SET_INTERVAL_ID':
            return {
                ...state,
                intervalId: action.payload.id
            };
        case 'SET_NETWORK':
            return {
                ...state,
                network: action.payload.network
            }


        default:
            return state;
    }
};

export default metaMask;