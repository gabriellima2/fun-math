import { combineReducers } from "@reduxjs/toolkit";

import { tipReducer } from "./modules/tip-module/reducer";

export const reducers = combineReducers({
	tip: tipReducer,
});
