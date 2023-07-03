import * as api from "@/api/movie"
import to from "await-to-js"
import { AppDispatch, RootState } from ".."

export function getMovies(data: any) {
  return async (dispatch: AppDispatch, {}) => {
    dispatch({ type: "loading/turnOn" })
    let [err, response] = await to(api.getMovie(data))
    if (err) {
      dispatch({ type: "loading/turnOff" })
      return Promise.reject(err.message)
    }
    dispatch({ type: "loading/turnOff" })
    return Promise.resolve(response)
  }
}
