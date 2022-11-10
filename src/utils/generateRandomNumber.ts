import type { INumberLimits } from "@interfaces/INumberLimits";

export function generateRandomNumber({ max, min }: INumberLimits, Math: Math) {
	return Math.floor(Math.random() * max + min);
}
