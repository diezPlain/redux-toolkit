
/* import { useDispatch, useSelector } from "react-redux" */
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { decrement, increment } from "../../store/slices/counter/counterSlice"

export const Counter = () => {
  /* -----Original Redux--------- */
  //const count = useSelector((state: RootState) => state.counter.value)
  //const dispatch = useDispatch()

  /* -----With Custom hooks--------- */
  const { value} = useAppSelector(
    (state) => state.counter
  )
  const dispatch = useAppDispatch()
  
  return (
    <>
    <h3 className="text-center">Counter</h3>
    <div className='contain-buttons'>
        <div>
            <button
            aria-label="Increment value"
            className='btn btn-success'
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span className='data'>{value}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className='btn btn-warning'
            >
            Decrement
            </button>
        </div>
    </div>
    </>
    
  )
}
