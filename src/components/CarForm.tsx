import { useAppDispatch, useAppSelector } from "../hooks"
import { changeName, changeCost, addCar } from "../store"

export default function CarForm() {
  const { name, cost } = useAppSelector(state => state.form)

  const dispatch = useAppDispatch()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value))
  }

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  }

  const handleCarAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const car = { name, cost }
    dispatch(addCar(car))
  }
  console.log('car form')
  return (
    <form className="is-flex mb-4" onSubmit={handleCarAdd}>
      <input className="input" value={name} type="text" placeholder="name" onChange={handleNameChange} />
      <input className="input mx-3" value={cost || ''} type="number" placeholder="cost" step={1} onChange={handleCostChange} />
      <button className="button is-primary has-text-white">Add Car</button>
    </form>
  )
}