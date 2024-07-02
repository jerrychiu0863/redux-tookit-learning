import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Car = {
  name: string;
  cost: number;
  id: string;
}

const initialState: { searchTerm: string; data: Car[] } = { searchTerm: '', data: [] }

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    addCar(state, action: PayloadAction<{ name: string, cost: number }>) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      })
    },
    removeCar(state, action: PayloadAction<string>) {
      // const index = state.cars.findIndex(car => car.id === action.payload)
      // state.cars.splice(index, 1)
      const updatedCars = state.data.filter(car => car.id !== action.payload)
      state.data = updatedCars;
    }
  }
})

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions