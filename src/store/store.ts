import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import uiReducer from './slices/ui/uiSlice'
import pokemonsReducer from './slices/pokemon/pokemonSlice'
import {todosApiSlice} from './slices/todo/todosApiSlice'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer,
    pokemons: pokemonsReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getDefaultMiddleware().concat(todosApiSlice.middleware).concat(localStorageMiddleware) as any,

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
