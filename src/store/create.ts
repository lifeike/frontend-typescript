import { AppDispatch } from "."
import to from "await-to-js"

export default function createAction(fnName: string, apiFn: Function) {
  return function (data: any) {
    return async (dispatch: AppDispatch) => {
      dispatch({ type: "loading/turnOn" })
      let [err, response] = await to(apiFn(data))
      if (err) {
        dispatch({ type: "loading/turnOff" })
        return Promise.reject(err.message)
      }
      dispatch({ type: "loading/turnOff" })
      return Promise.resolve(response)
    }
  }
}
