const initialState =  {
    faq: 0,
    about: 0
};

const header = (state = initialState, action) => {
    switch(action.type) {
        case 'FAQ':
            return {
                ...state,
                faq: state.faq + action.payload.num
            };
        case 'ABOUT':
            return {
                ...state,
                about: state.about + action.payload.num
            };

        default:
            return state;
    }
};

export default header;