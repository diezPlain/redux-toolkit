interface TodoItemProps {
    title: string;
}
export const TodoItem = ({title}:TodoItemProps) => {
  return (
    <div className="col-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
            </div>
        </div>
    </div>
  )
}
