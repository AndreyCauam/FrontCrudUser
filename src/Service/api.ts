import axios from "axios"

const VITE_API = import.meta.env.BASE_API_URL

export const api = axios.create({
    baseURL: VITE_API,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
})