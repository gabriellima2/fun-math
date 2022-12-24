import { tipSlice } from "./slice";

export interface SetMessage {
	message: string;
}

export const { clearMessage, setMessage } = tipSlice.actions;
