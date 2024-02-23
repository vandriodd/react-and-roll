import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    }
  }
})

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
    }
  }
})

const store = configureStore({
  // We have a slice called `songs` in our store
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  },
  extraReducers: (builder) => {
    // moviesSlice.actions.reset = moviesSlice.actions.reset.toString() = 'movie/reset'
    builder.addCase(moviesSlice.actions.reset, (state, action) => {
      return [];
    })
  }
})

const startingState = store.getState()
console.log(JSON.stringify(startingState));


store.dispatch(
  // action type matches up with the reducers above
  // type: 'song/addSong',
  // payload: 'New song!!!'
  songsSlice.actions.addSong('New song!!!')
)

export { store }
// export the action creator so I can get access to it in other components
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie, reset } = moviesSlice.actions
