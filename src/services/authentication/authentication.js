import {axiosInstance} from "../axiosBase";

const loginUri = '/login'

const handlesError = () => {
    return Promise.reject("Error")
}

const login = (username, password) => {
    return axiosInstance
        .post(loginUri, {username, password})
        .then(response => {
            return response
        })
        .catch(error => handlesError(error))
}

export {login}
