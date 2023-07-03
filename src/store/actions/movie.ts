import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "@/api/movie"

// First, create the thunk
export const getMovies = createAsyncThunk("users/fetchByIdStatus", async (data, thunkAPI) => {
  console.log("test")
  console.log(thunkAPI)
  console.log("test")
  const response = await api.getMovie(data)
  return response
})
