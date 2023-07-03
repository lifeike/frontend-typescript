import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "@/api/movie"
import { turnOff, turnOn } from "../reducers/loading"

// First, create the thunk
export const getMovies = createAsyncThunk("users/fetchByIdStatus", async (data, thunkAPI) => {
  thunkAPI.dispatch(turnOn())
  const response = await api.getMovie(data)
  thunkAPI.dispatch(turnOff())
  return response
})
