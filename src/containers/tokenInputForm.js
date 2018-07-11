import { connect } from "react-redux";

import { change, submit } from '../actions/tokenInputForm';
import tokenInputForm from "../components/tokenInputForm";

const mapStateToProps = (state) => {
    return {
        name: state.tokenInputForm.name,
        symbol: state.tokenInputForm.symbol,
        decimals: state.tokenInputForm.decimals,
        totalSupply: state.tokenInputForm.totalSupply
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: ({type, value}) => {
            dispatch(change({
                type,
                value
            }));
        },
        handleSubmit: () => {
            dispatch(submit());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(tokenInputForm);