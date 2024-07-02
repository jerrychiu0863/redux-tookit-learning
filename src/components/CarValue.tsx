import { useAppSelector } from "../hooks";

export default function CarValue() {
  const totalCost = useAppSelector(({ cars: { data, searchTerm } }) =>
    data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((total, car) => total + car.cost, 0)
  );

  return (
    <div className="has-text-right">Total Value: ${totalCost}</div>
  )
}