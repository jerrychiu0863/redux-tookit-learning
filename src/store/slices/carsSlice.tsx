import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Cars = {
  name: string;
  cost: number;
  id: string;
}

const initialState: Cars[] = []

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<Cars>) {
      state.push(action.payload)
    }
  }
})