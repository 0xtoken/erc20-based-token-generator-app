const initialState =  {
    isMetaMaskLocked: true,
};

const header = (state = initialState, action) => {
    switch(action.type) {
        case 'UNLOCK':
            return {
                isMetaMaskLocked: false
            };
        case 'LOCK':
            return {
                isMetaMaskLocked: true
            };
        default:
            return state;
    }
};

export default header;