import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    // this is for the songsSlice (the big reducer created by createSlice) knows that it should run that function
    addSong(state, action) {
      // ! State is not the big state object in the store, it's the piece of state managed by this reducer
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    extraReducers: (builder) => {
      builder.addCase(reset, (state, action) => {
        return [];
      })
    }
  }
})

export const { addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer
