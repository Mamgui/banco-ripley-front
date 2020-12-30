import axios from 'axios'

const BASE_URL = "http://localhost:8080"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

const statusCodes = {
    ok: 200,
    forbidden: 403,
    notFound: 404,
}

export {axiosInstance, statusCodes}