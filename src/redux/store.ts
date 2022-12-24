import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

export const store = configureStore({
	reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
