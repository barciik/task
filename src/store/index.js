import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
	name: 'colors',
	initialState: {
		colors: null
	},
	reducers: {
		setColors(state, payload) {
      state.colors = payload.payload.data
      console.log(state.colors);
    }		
	},
});

export const store = configureStore({
  reducer: counterReducer,
})

export const reducerActions = counterReducer.actions