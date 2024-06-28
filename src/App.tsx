import { useAppSelector, useAppDispatch } from "./hooks";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import { changeName } from "./store";

export default function App() {
  const dispatch = useAppDispatch()
  const form = useAppSelector((state) => state.form)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value))
  }
  console.log(form)
  return (
    <div>
      <input onChange={handleInputChange} />
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}