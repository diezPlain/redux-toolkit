import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from './interfaces';

// Definir la acción asincrónica para obtener todos los pokémones
export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const { results } = response.data;
      const pokemons: Pokemon[] = results.map((pokemon: Pokemon) => ({
        name: pokemon.name,
        url: pokemon.url,
      }));
      return pokemons;
    } catch (error) {
      throw Error('Failed to fetch pokemons');
    }
  }
);

