import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <div className="container">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}