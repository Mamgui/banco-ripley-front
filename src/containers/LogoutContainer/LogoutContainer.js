import {connect} from 'react-redux'
import {logoutThunk} from "../../modules/authentication/authentication";
import Logout from "../../components/Logout/Logout";

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    logout: () => {
        logoutThunk(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)