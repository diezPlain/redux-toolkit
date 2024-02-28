import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
  isFavourite: boolean;
}

 const getInitialState = () => {
   if ( typeof localStorage === 'undefined' ) return {};
   const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}'  );
   return favorites;
 }

const initialState: CounterState = {
  value: 10,
  isFavourite: getInitialState()
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    changeFavourite: (state, action: PayloadAction<boolean>) => {
      state.isFavourite = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeFavourite } = counterSlice.actions

export default counterSlice.reducer
