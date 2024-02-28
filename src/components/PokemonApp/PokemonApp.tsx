import { useEffect } from "react"
import { useAppSelector, useAsyncDispatch } from "../../store/hooks"
import { fetchPokemons } from "../../store/slices/pokemon/pokemonThunks"
import { PokemonItem } from "./PokemonItem/PokemonItem"

export const PokemonApp = () => {
    const asyncDispatch = useAsyncDispatch()
    const { pokemons, isLoading} = useAppSelector(
      (state) => state.pokemons
    )

    useEffect(() => {
      asyncDispatch(fetchPokemons());
    }, [asyncDispatch])

    
  return (
    <div>
        <h3 className="text-center">PokemonApp</h3>
        <hr />
        <div className="row">
            {
              isLoading ? (
                <div className="spinner-border text-primary text-center" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ): (
                <>
                {pokemons.length > 0 ? (
                  <>
                    {pokemons.map((poke, i) => (
                      <PokemonItem key={`${i}-pokemonItem`} name={poke.name} />
                    ))}
                  </>
                ) : (
                  <p>
                    Nothing to show!!
                  </p>
                )}
                </>
              )
            }
        </div>
    </div>
  )
}
