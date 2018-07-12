import { connect } from "react-redux";
import Home from '../components/home';


const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked,
        currentNetwork: state.metaMask.network
    }
};



export default connect(mapStateToProps, null)(Home);