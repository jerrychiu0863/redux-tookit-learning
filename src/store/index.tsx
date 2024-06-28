import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer
  }
})

export { store, changeName, changeCost }
export type RootState = ReturnType<typeof store.getState>