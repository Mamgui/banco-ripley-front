import {login} from "../../services/authentication/authentication";

const actions = {
    START: 'START_LOGIN_REQUEST',
    FINISH: 'FINISH_LOGIN_REQUEST',
    ERROR: 'ERROR_LOGIN_REQUEST',
    RESTART: 'RESTART_LOGIN_REQUEST',
}

const loginThunk = (dispatch, username, password) => {
    dispatch({type: actions.START})

    function handleSuccessfully() {
        dispatch({type: actions.FINISH})
    }

    function handlesError() {
        dispatch({type: actions.ERROR})
    }

    return login(username, password)
        .then(handleSuccessfully)
        .catch(handlesError)
}

const logoutThunk = dispatch => {
    dispatch({type: actions.RESTART})
}

const INITIAL_STATE = {
    isLoginLoading: false,
    isLoggedIn: false,
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actions.START:
            return {
                ...INITIAL_STATE,
                isLoginLoading: true
            }
        case actions.FINISH: {
            return {
                ...INITIAL_STATE,
                isLoggedIn: true,
            }
        }
        case actions.ERROR:
        case actions.RESTART:
            return INITIAL_STATE
        default:
            return state
    }
}

const isLoginLoading = state => state.authentication.isLoginLoading
const isLoggedIn = state => state.authentication.isLoggedIn

export {loginThunk, logoutThunk, reducer, isLoginLoading, isLoggedIn}
