
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const localStorageMiddleware = ( state: MiddlewareAPI ) => { 
  return (next: Dispatch ) => (action: Action) => {

    next(action);

    if ( action.type === 'counter/changeFavourite' ) {
      const { counter } = state.getState() as RootState;
      localStorage.setItem('favorite-pokemons', JSON.stringify( counter.isFavourite ));
      return;
    }  
  }
}


