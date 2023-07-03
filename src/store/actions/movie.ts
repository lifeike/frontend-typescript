import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "@/api/movie"

// First, create the thunk
export const getMovies = createAsyncThunk("users/fetchByIdStatus", async (userId: number, thunkAPI) => {
  const response = await api.getMovie(userId)
  return response.data
})
