import {login, recoverPassword, updatePassword, register} from "../../services/authentication/authentication";

const actions = {
    loginStart: 'authentication/login/start',
    loginFinish: 'authentication/login/finish',
    loginError: 'authentication/login/error',
    recoverPasswordStart: 'authentication/recoverPassword/start',
    recoverPasswordFinish: 'authentication/recoverPassword/finish',
    recoverPasswordError: 'authentication/recoverPassword/error',
    updatePasswordStart: 'authentication/updatePassword/start',
    updatePasswordFinish: 'authentication/updatePassword/finish',
    updatePasswordError: 'authentication/updatePassword/error',
    registerStart: 'authentication/register/start',
    registerFinish: 'authentication/register/finish',
    registerError: 'authentication/register/error',
    restart: 'authentication/restart',
}

const loginThunk = (dispatch, username, password) => {
    dispatch({type: actions.loginStart})

    function handleSuccessfully() {
        dispatch({type: actions.loginFinish})
    }

    function handlesError() {
        dispatch({type: actions.loginError})
    }

    return login(username, password)
        .then(handleSuccessfully)
        .catch(handlesError)
}

const logoutThunk = dispatch => {
    dispatch({type: actions.restart})
}

const recoverPasswordThunk = (dispatch, username) => {
    dispatch({type: actions.recoverPasswordStart})

    function handleSuccessfully(response) {
        dispatch({type: actions.recoverPasswordFinish, token: response.token})
    }

    function handlesError() {
        dispatch({type: actions.recoverPasswordError})
    }

    return recoverPassword(username)
        .then(handleSuccessfully)
        .catch(handlesError)
}

const updatePasswordThunk = (dispatch, token, newPassword) => {
    dispatch({type: actions.updatePasswordStart})

    function handleSuccessfully() {
        dispatch({type: actions.updatePasswordFinish})
    }

    function handlesError() {
        dispatch({type: actions.updatePasswordError})
    }

    return updatePassword(token, newPassword)
        .then(handleSuccessfully)
        .catch(handlesError)
}

const registerThunk = (dispatch, username, password) => {
    dispatch({type: actions.registerStart})

    function handleSuccessfully() {
        dispatch({type: actions.registerFinish})
    }

    function handlesError() {
        dispatch({type: actions.registerError})
    }

    return register(username, password)
        .then(handleSuccessfully)
        .catch(handlesError)
}

const restartThunk = dispatch => {
    dispatch({type: actions.restart})
}

const initialState = {
    isLoginLoading: false,
    isLoggedIn: false,
    isRecoverPasswordLoading: false,
    token: null,
    isUpdatePasswordLoading: false,
    isPasswordUpdated: false,
    isRegisterLoading: false,
    isRegistered: false,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.loginStart:
            return {
                ...initialState,
                isLoginLoading: true,
            }
        case actions.loginFinish: {
            return {
                ...initialState,
                isLoggedIn: true,
            }
        }
        case actions.recoverPasswordStart: {
            return {
                ...initialState,
                isRecoverPasswordLoading: true
            }
        }
        case actions.recoverPasswordFinish: {
            return {
                ...initialState,
                token: action.token,
            }
        }
        case actions.updatePasswordStart:
            return {
                ...initialState,
                isUpdatePasswordLoading: true,
            }
        case actions.updatePasswordFinish: {
            return {
                ...initialState,
                isPasswordUpdated: true,
            }
        }
        case actions.registerStart:
            return {
                ...initialState,
                isRegisterLoading: true,
            }
        case actions.registerFinish: {
            return {
                ...initialState,
                isRegistered: true,
            }
        }
        case actions.loginError:
        case actions.recoverPasswordError:
        case actions.updatePasswordError:
        case actions.registerError:
        case actions.restart:
            return initialState
        default:
            return state
    }
}

const isLoginLoading = state => state.authentication.isLoginLoading
const isLoggedIn = state => state.authentication.isLoggedIn
const isRecoverPasswordLoading = state => state.authentication.isRecoverPasswordLoading
const getToken = state => state.authentication.token
const isUpdatePasswordLoading = state => state.authentication.isUpdatePasswordLoading
const isPasswordUpdated = state => state.authentication.isPasswordUpdated
const isRegisterLoading = state => state.authentication.isRegisterLoading
const isRegistered = state => state.authentication.isRegistered

export {
    loginThunk,
    logoutThunk,
    recoverPasswordThunk,
    updatePasswordThunk,
    registerThunk,
    restartThunk,
    reducer,
    isLoginLoading,
    isLoggedIn,
    isRecoverPasswordLoading,
    getToken,
    isUpdatePasswordLoading,
    isPasswordUpdated,
    isRegisterLoading,
    isRegistered
}
