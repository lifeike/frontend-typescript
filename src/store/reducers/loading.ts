import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store"

// Define a type for the slice state
interface LoadingState {
  value: boolean
}

// Define the initial state using that type
const initialState: LoadingState = { value: false }

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    turnOn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = true
    },
    turnOff: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { turnOff, turnOn } = loadingSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectLoading = (state: RootState) => state.loading.value

export default loadingSlice.reducer
