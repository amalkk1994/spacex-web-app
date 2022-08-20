import { configureStore } from "@reduxjs/toolkit"
import infoReducer from "./infoReducer"

const store = configureStore({
  reducer: {
    info: infoReducer,
  },
})

export default store
