import {connect} from 'react-redux'
import RecoverPassword from "../../components/RecoverPassword/RecoverPassword";
import {
    getToken,
    isPasswordUpdated,
    recoverPasswordThunk,
    restartThunk,
    updatePasswordThunk
} from "../../modules/authentication/authentication";

const mapStateToProps = state => ({
        token: getToken(state),
        isPasswordUpdated: isPasswordUpdated(state)
    }
)

const mapDispatchToProps = dispatch => ({
    recoverPassword: (username) => {
        recoverPasswordThunk(dispatch, username)
    },
    updatePassword: (token, newPassword) => {
        updatePasswordThunk(dispatch, token, newPassword)
    },
    restart: () => {
        restartThunk(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword)
