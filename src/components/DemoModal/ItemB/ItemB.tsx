import { useAppDispatch } from "../../../store/hooks"
import { showModalAction } from "../../../store/slices/ui/uiSlice"

export const ItemB = () => {
  const dispatch = useAppDispatch()
  return (
    <button
    className='btn btn-dark'
    onClick={() => dispatch(showModalAction(true))}
    >
      Component B
    </button>
  )
}
