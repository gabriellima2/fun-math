import {
	Action,
	configureStore,
	PreloadedState,
	ThunkAction,
} from "@reduxjs/toolkit";

import { reducers } from "./reducers";

export const store = configureStore({
	reducer: reducers,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
	configureStore({ reducer: reducers, preloadedState });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export type AppStore = typeof store;
