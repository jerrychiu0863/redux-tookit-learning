import { useAppSelector } from "../hooks"

export default function CarList() {
  const { data } = useAppSelector(state => state.cars)
  console.log(data)

  const renderCarList = data.map(d => {
    return (<li key={d.id} className="mb-3">
      <div className="box">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-content-center">
          <div className="is-align-self-center">{d.name} - {d.cost}</div>
          <button className="button is-danger has-text-white">X</button>
        </div>
      </div>
    </li>)
  })

  return (
    <div className="mt-3">
      <ul>
        {renderCarList}
      </ul>
    </div>
  )
}