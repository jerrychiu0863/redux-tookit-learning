import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer
  }
})

export { store, changeName, changeCost }
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;