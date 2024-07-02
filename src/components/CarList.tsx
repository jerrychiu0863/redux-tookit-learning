import { useAppSelector, useAppDispatch } from "../hooks";
import { removeCar } from "../store";
import type { Car } from "../store/slices/carsSlice";
import type { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export default function CarList() {

  // Memorized 
  const memorizedCars = createSelector([(state: RootState) => state.cars.data, (state: RootState) => state.cars.searchTerm], (cars, searchTerm) => {
    return cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  const cars = useAppSelector(memorizedCars);

  // The following causes unnecessary rerenders when form value changes
  //CarList.tsx:13 Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
  // const cars: Car[] = useAppSelector(({ cars: { data, searchTerm } }) => {
  //   return data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  // });

  const dispatch = useAppDispatch()

  const handleCarRemove = (car: Car) => {
    dispatch(removeCar(car.id))
  }

  const renderCarList = () => {
    // const filteredData = searchTerm ? data.filter(car => car.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) : data

    return cars.map((car) =>
    (
      <li key={car.id} className="mb-3">
        <div className="box">
          <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-content-center">
            <div className="is-align-self-center">{car.name} - ${car.cost}</div>
            <button className="button is-danger has-text-white" onClick={() => handleCarRemove(car)}>X</button>
          </div>
        </div>
      </li>
    )
    )

  }
  return (
    <div className="mt-3">
      <ul>
        {renderCarList()}
      </ul>
      <hr />
    </div>
  )
}