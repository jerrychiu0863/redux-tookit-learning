export default function CarList() {
  return (
    <div className="mt-3">
      <ul>
        <li>
          <div className="box">
            <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-content-center">
              <div className="is-align-self-center">Car - Cost</div>
              <button className="button is-danger has-text-white">X</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}