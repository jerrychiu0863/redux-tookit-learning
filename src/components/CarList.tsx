import { useAppSelector, useAppDispatch } from "../hooks";
import { removeCar } from "../store";
import type { Car } from "../store/slices/carsSlice";

export default function CarList() {
  const cars = useAppSelector(({ cars: { searchTerm, data } }) => {
    return data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  const dispatch = useAppDispatch()

  const handleCarRemove = (car: Car) => {
    dispatch(removeCar(car.id))
  }

  const renderCarList = () => {
    // const filteredData = searchTerm ? data.filter(car => car.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) : data

    return cars.map(car =>
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