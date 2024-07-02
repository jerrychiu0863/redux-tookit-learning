import { useAppDispatch } from "../hooks";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
  const dispatch = useAppDispatch()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value))
  }

  return (
    <div>
      <input className="input" type="text" placeholder="Search car" onChange={handleSearchChange} />
    </div>
  )
}