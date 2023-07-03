import axios from "axios"
import {
  // AxiosRequestConfig, // Change to InternalAxiosRequestConfig
  InternalAxiosRequestConfig,
} from "axios"
import jwtDecode, { JwtPayload } from "jwt-decode"
import { baseURL } from "./URL"
import * as session from "@/utils/session"
import store from "@/store"
import toast from "react-hot-toast"

// create an axios instance
const service = axios.create({
  baseURL,
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config

    //if expired, get new access token, then request again
    await axios
      .post(`${baseURL}/auth/refresh-token`, { refresh_token: session.getSession()?.refresh_token })
      .then(async (res) => {
        session.setSession(res.data)
        store.dispatch({ type: "user/setUser", payload: res.data })
        config.headers.Authorization = res.data.access_token
        console.log("access token refreshed.")
      })
      .catch((err) => {
        console.log("refresh token expired.")
        session.clearSession()
        window.location.href = "/"
      })
    return config
  },
  (error) => {
    return error
  }
)

// respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    toast.error(error.response?.data)
    return Promise.reject(error)
  }
)

export default service
