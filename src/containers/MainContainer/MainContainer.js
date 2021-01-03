import {connect} from 'react-redux'
import Main from "../../components/Main/Main";
import {isLoggedIn} from "../../modules/authentication/authentication";

const mapStateToProps = state => ({
        isLoggedIn: isLoggedIn(state)
    }
)

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
