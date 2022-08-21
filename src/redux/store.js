import { configureStore } from "@reduxjs/toolkit"
import infoReducer from "./infoReducer"
import launchReducer from "./launchReducer"

const store = configureStore({
  reducer: {
    info: infoReducer,
    launch: launchReducer,
  },
})

export default store
