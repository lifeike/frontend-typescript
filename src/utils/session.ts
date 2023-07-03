import { SessionType } from "@/types/common"

export const getSession = (): SessionType => {
  let sessionJson = localStorage.getItem("session")
  if (sessionJson) {
    try {
      return JSON.parse(sessionJson)
    } catch (err) {
      return { access_token: "", refresh_token: "" }
    }
  }
  return { access_token: "", refresh_token: "" }
}

export const setSession = (session: { accessToken: string; refreshToken: string }) => {
  localStorage.setItem("session", JSON.stringify(session))
}

export const clearSession = () => {
  localStorage.removeItem("session")
}

export const isAuthenticated = () => {
  const session = getSession()
  // return session !== undefined && session.access_token !== undefined && session.refresh_token !== undefined
  return false
}
