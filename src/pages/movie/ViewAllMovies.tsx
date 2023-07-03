import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import * as actions from "@/store/actions/movie"

const ViewAllMovies = () => {
  const dispatch = useAppDispatch()
  const loadData = async () => {
    const result = await dispatch(actions.getMovies())
    // console.log(result)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <h2>ViewAllMovies</h2>
    </div>
  )
}

export default ViewAllMovies
