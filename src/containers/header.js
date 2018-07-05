import { connect } from "react-redux";

import Header from '../components/header';

import {faq, about} from '../actions/header';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.isMetaMaskLocked
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        faq: () => {
            dispatch(faq(2));

        },
        about: () => {
            dispatch(about(3));
        },
        unlock: () => {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);