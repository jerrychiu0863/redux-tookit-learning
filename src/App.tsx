import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

export default function App() {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => {
    return state.form
  })

  console.log(form)
  return (
    <div>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}