import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api/movie"

// First, create the thunk
const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async (userId: number, thunkAPI) => {
  // const response = await api.fetchById(userId)
  // return response.data
})
