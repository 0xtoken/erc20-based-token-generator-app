import { connect } from "react-redux";

import TokenInputForm from '../components/tokenInputForm';

import { change, submit } from '../actions/tokenInputForm';

const mapStateToProps = (state) => {
    return {
        name: state.tokenInputform.name,
        symbol: state.tokenInputform.symbol,
        decimals: state.tokenInputform.decimals,
        totalSupply: state.tokenInputform.totalSupply
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
        handleSubmit: (state) => {
            // TODO 非同期処理
            console.log(state);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenInputForm);