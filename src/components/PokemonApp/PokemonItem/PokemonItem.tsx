interface PokemonItemProps {
    name: string;
}
export const PokemonItem = ({name}:PokemonItemProps) => {
  return (
    <div className="col-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
            </div>
        </div>
    </div>
  )
}
