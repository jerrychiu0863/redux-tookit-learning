import { useAppSelector } from "../hooks";

export default function CarValue() {
  const totalCost = useAppSelector(({ cars: { data, searchTerm } }) =>
    data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((total, car) => total + car.cost, 0)
  );
  // const calculateTotal = () => {
  //   // Assuming `data` is an array of car objects with a `value` property
  //   if (!data || !Array.isArray(data)) {
  //     return 0;
  //   }
  //   const filteredData = searchTerm ? data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())) : data
  //   const values = filteredData.map(d => d.cost);
  //   // Provide initial value for the empty array
  //   return values.reduce((total, value) => total + value, 0);

  // }

  return (
    <div className="has-text-right">Total Value: ${totalCost}</div>
  )
}