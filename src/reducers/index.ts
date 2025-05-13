import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralState {
	language: string
}

export const initialState: GeneralState = {
	language: 'EN'
}

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setLanguage: (state: GeneralState, action: PayloadAction<string>) => {
			const newState = state;
			state.language = action.payload;
			return newState;
		}
	}
})

export const {
	setLanguage
} = generalSlice.actions;