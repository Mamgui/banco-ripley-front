import {connect} from 'react-redux'
import {
    isRegistered,
    isRegisterLoading,
    registerThunk,
    restartThunk
} from "../../modules/authentication/authentication";
import Register from "../../components/Register/Register";

const mapStateToProps = state => ({
    isRegisterLoading: isRegisterLoading(state),
    isRegistered: isRegistered(state)
})

const mapDispatchToProps = dispatch => ({
    register: (username, password) => {
        registerThunk(dispatch, username, password)
    },
    restart: () => {
        restartThunk(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
