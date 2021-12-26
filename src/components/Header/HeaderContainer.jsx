import { connect } from "react-redux";
import { logout } from "../../Redux/AccountsReducer";
import Header from './Header';

let mapStateToProps = (state) => ({
    header: state.header,
    authorization: state.authorization
})

export default connect(mapStateToProps, {logout})(Header);