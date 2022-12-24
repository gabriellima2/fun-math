import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { TipState } from "./@types/TipState";
import type { SetMessage } from "./actions";

const initialState: TipState = {
	message: null,
};

export const tipSlice = createSlice({
	name: "tip",
	initialState,
	reducers: {
		setMessage: (state, action: PayloadAction<SetMessage>) => {
			state.message = action.payload.message;
		},
		clearMessage: (state, action: PayloadAction) => {
			state.message = null;
		},
	},
});
