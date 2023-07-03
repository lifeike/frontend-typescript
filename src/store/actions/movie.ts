import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "@/api/movie"
import * as loading from "../reducers/loading"

// First, create the thunk
export const getMovies = createAsyncThunk("", async (data, thunkAPI) => {
  thunkAPI.dispatch(loading.turnOn())
  const response = await api.getMovie(data)
  console.log(response)
  thunkAPI.dispatch(loading.turnOff())
  return response
})
