import { useSelector } from "react-redux";
import type { RootState } from "@redux/store";

export const useTipSelect = () => useSelector((state: RootState) => state.tip);
