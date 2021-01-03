import {axiosInstance} from "../axiosBase";

const loginUri = '/login'
const recoverPasswordUri = '/recover-password'
const updatePasswordUri = '/update-password'
const registerUri = '/register'

const handlesSuccessful = response => response.data

const handlesError = () => Promise.reject("Error")

const login = (username, password) => {
    return axiosInstance
        .post(loginUri, {username, password})
        .then(handlesSuccessful)
        .catch(handlesError)
}

const recoverPassword = (username) => {
    return axiosInstance
        .post(recoverPasswordUri, {username})
        .then(handlesSuccessful)
        .catch(handlesError)
}

const updatePassword = (token, newPassword) => {
    return axiosInstance
        .post(updatePasswordUri, {token, newPassword})
        .then(handlesSuccessful)
        .catch(handlesError)
}

const register = (username, password) => {
    return axiosInstance
        .post(registerUri, {username, password})
        .then(handlesSuccessful)
        .catch(handlesError)
}

export {login, recoverPassword, updatePassword, register}
