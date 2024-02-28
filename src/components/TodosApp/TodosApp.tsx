import { useState } from "react"
import { useGetTodosByIdQuery, useGetTodosQuery } from "../../store/slices/todo/todosApiSlice"
import { TodoItem } from "./TodoItem/TodoItem"


export const TodosApp = () => {
const [idState, setIdState] = useState(1)
const {data, isLoading, isSuccess} = useGetTodosQuery()
const {data: dataId,isLoading: isLoadingId, isSuccess: isSuccessId} = useGetTodosByIdQuery(idState)

  return (
    <div>
        <h3 className="text-center">TodosApp/RTK Query</h3>
        <hr />
        <div className="text-center row">
        {isLoadingId ? (
            <div className="spinner-border text-primary text-center" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          ) : (
            <>
              {isSuccessId && (
                <TodoItem title={dataId.title} />
              )}
            </>
          )}
          <button
          aria-label="Increment value"
          className='btn btn-success'
          onClick={() => setIdState(idState + 1)}
          >
            Next Todo
          </button>
        </div>
        <hr />
        <div className="text-center row">
          {isLoading ? (
            <div className="spinner-border text-primary text-center" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          ) : (
            <>
            {isSuccess && data.map((item, i) => (
              <TodoItem key={`${i}-pokemonItem`} title={item.title} />
            ))}
            </>
          )}
        </div>
        
    </div>
  )
}
