import { connect } from "react-redux";
import { login } from "../../Redux/AccountsReducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {
        authorization: state.authorization
    }
}

export default connect(mapStateToProps, {login})(Login);