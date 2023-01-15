import { configureStore, createSlice, current } from '@reduxjs/toolkit';

const counterReducer = createSlice({
	name: 'colors',
	initialState: {
		colors: null,
		originalColors: null,
	},
	reducers: {
		setColors(state, action) {
			state.originalColors = action.payload.data;
			state.colors = action.payload.data;
			console.log(state.colors);
		},
		findColor(state, action) {
			console.log(current(state.colors), action.payload);
			if (action.payload && state.colors.filter((item) => item.id === action.payload.id)) {
				state.colors = [...state.colors.filter(
					(item) => item.id === action.payload.id
				)]
			} else {
				state.colors = state.originalColors;
			}
		},
	},
});

export const store = configureStore({
	reducer: counterReducer,
});

export const reducerActions = counterReducer.actions;
