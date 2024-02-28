import { useAppDispatch } from "../../../store/hooks"
import { showModalAction } from "../../../store/slices/ui/uiSlice"

export const ItemA = () => {
  const dispatch = useAppDispatch()
  return (
    <button
    className='btn btn-primary bt-modal'
    onClick={() => dispatch(showModalAction(true))}
    >
        Component A
    </button>
  )
}
