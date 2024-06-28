import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: { name: '', cost: 0 },
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload
    }
  }
})

export const formReducer = formSlice.reducer
export const { changeName, changeCost } = formSlice.actions