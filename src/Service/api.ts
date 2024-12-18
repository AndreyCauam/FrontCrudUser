import axios from "axios"

const VITE_API = import.meta.env.VITE_BASE_API_URL

export const api = axios.create({
    baseURL: VITE_API,
    withCredentials: true,
})