import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchPokemons } from './pokemonThunks';
import { Pokemon } from './interfaces';

export interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}

const initialState: PokemonState = {
    page: 10,
    pokemons: [],
    isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    /* -----No las usamos!!!!------ */
   /*  startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
        state.pokemons = action.payload
    }, */
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
      state.isLoading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state) => {
      state.isLoading = false;
    });
  },
  /* 
  fetchPokemons.pending: Esta acción se dispara automáticamente cuando la solicitud asincrónica está en curso. 
    Es decir, cuando se ha iniciado la solicitud pero aún no se ha completado. Es útil para mostrar un estado 
    de carga mientras se espera la respuesta de la solicitud.

  fetchPokemons.fulfilled: Esta acción se dispara automáticamente cuando la solicitud asincrónica se completa con éxito. 
    Lleva consigo los datos obtenidos de la solicitud, que pueden ser procesados y almacenados en el estado de Redux.

  fetchPokemons.rejected: Esta acción se dispara automáticamente si la solicitud asincrónica falla por algún motivo. 
    Puede ser debido a un error de red, un error en el servidor, o cualquier otro tipo de error. 
    En este caso, generalmente se maneja el error adecuadamente en el reducer.
   */
})

// Action creators are generated for each case reducer function
/* export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions */

export default pokemonSlice.reducer
