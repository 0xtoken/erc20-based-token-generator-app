const initialState =  {
    name: 'madokacoin',
    symbol: 'MDKCN',
    totalSupply: 1000,
    loading: false,
    success: false
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
        case 'CHANGE_TOTAL_SUPPLY':
            return {
                ...state,
                totalSupply: action.payload.value
            };


        case 'CHANGE_LOADING':
            return {
                ...state,
                loading: !state.loading
            };
        case 'CHANGE_SUCCESS':
            return {
                ...state,
                success: action.payload.status
            };
        default:
            return state;
    }
};

export default tokenInputForm;