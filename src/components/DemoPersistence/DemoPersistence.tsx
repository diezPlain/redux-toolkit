import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { changeFavourite } from "../../store/slices/counter/counterSlice"


export const DemoPersistence = () => {
    const { isFavourite } = useAppSelector(
        (state) => state.counter
      )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dispatch = useAppDispatch()
  return (
    <>
    <h3 className="text-center">DemoPersistence</h3>
    <div className="text-center contain-icon">
        {
            isFavourite 
            ? (<IoHeart />)
            : (<IoHeartOutline />)
        }
    </div>
    <div className='contain-buttons'>
        <button
        aria-label="Increment value"
        className='btn btn-success'
        onClick={() => dispatch(changeFavourite(!isFavourite))}
        >
            Change Fav
        </button>
    </div>
    </>
  )
}
