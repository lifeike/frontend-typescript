import React, { useState, useRef, useEffect, memo } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import * as actions from "@/store/actions/movie"
import { decrement, increment } from "@/store/reducers/counter"

const ViewAllMovies = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getMovies)
  }, [])

  return (
    <div>
      <h2>ViewAllMovies</h2>
    </div>
  )
}

export default ViewAllMovies
