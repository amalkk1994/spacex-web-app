import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getLaunches = createAsyncThunk("api/launches", ({ pageNo, limit }) => {
  console.log("pageNo", pageNo)
  console.log("limit", limit)
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches?limit=${limit}&&offset=${
        pageNo * limit
      }`
    )
    .then((response) => {
      console.log("API Launch Data", response.data)
      return response.data
    })
    .catch((err) => {
      console.log("ërror from launch API", err)
    })
})

const launchSlice = createSlice({
  name: "launch",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getLaunches.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getLaunches.pending]: (state, action) => {
      state.loading = true
    },
    [getLaunches.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getLaunches }
export default launchSlice.reducer
