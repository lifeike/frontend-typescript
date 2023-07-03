import axios from "axios"
import {
  AxiosError,
  AxiosInstance,
  // AxiosRequestConfig, // Change to InternalAxiosRequestConfig
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios"
import jwtDecode, { JwtPayload } from "jwt-decode"
import moment from "moment"

import { baseURL } from "./URL"
import * as session from "@/utils/session"
import store from "@/store"
import toast from "react-hot-toast"
import { SessionType } from "@/types/common"

// create an axios instance
const service = axios.create({
  baseURL,
  timeout: 50000,
  headers: { "content-type": "application/json;charset=UTF-8" },
})
// request interceptor
service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    let expired = null
    if (session.isAuthenticated()) {
      config.headers.Authorization = session.getSession()?.access_token
      let exp_time = jwtDecode<JwtPayload>(session.getSession()?.access_token).exp
      let now = Math.floor(Date.now() / 1000)
      // console.log(exp_time)
      // console.log(now)
      // console.log(exp_time - now)
      if (exp_time) expired = exp_time - now < 10
    }
    if (!expired) return config

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
