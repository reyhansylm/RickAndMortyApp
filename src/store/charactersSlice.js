import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      if (state.favorites.length < 10) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((character) => character.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = charactersSlice.actions;

export const selectFavorites = (state) => state.characters.favorites;

export default charactersSlice.reducer;
