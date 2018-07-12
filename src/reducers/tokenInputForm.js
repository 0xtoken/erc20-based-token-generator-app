const initialState =  {
    name: 'madokacoin',
    symbol: 'MDKCN',
    totalSupply: 1000,
    loading: false,
    success: false,
    error: undefined
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
        case 'RESET_ERROR':
            return {
                ...state,
                error: undefined
            };
        case 'INVALID_PARAMS':
            return {
                ...state,
                error: {
                    type: "INVALID_PARAM",
                    param: action.payload.param
                }
            };
        case 'INTERNAL_SERVER_ERROR':
            return {
                ...state,
                error: {
                    type: "INTERNAL_SERVER_ERROR"
                }
            };

        case 'METAMASK_REJECT_ERROR':
            return {
                ...state,
                error: {
                    type: "METAMASK_REJECT_ERROR"
                }
            }

        default:
            return state;
    }
};

export default tokenInputForm;