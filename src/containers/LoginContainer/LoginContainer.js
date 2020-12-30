import {connect} from 'react-redux'
import Login from "../../components/Login/Login";
import {loginThunk} from "../../modules/authentication/authentication";

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        loginThunk(dispatch, username, password)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
