const initialState =  {
    name: 'madokacoin',
    symbol: 'MDKCN',
    decimals: 18,
    totalSupply: 1000
};

const tokenInputForm = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload.value
            };
        case 'CHANGE_SYMBOL':
            return {
                ...state,
                symbol: action.payload.value
            };
        case 'CHANGE_DECIMALS':
            return {
                ...state,
                decimals: action.payload.value
            };
        case 'CHANGE_TOTAL_SUPPLY':
            return {
                ...state,
                totalSupply: action.payload.value
            };
        default:
            return state;
    }
};

export default tokenInputForm;