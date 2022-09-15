export interface RandomNumberLimits {
	max: number;
	min: number;
}

export function generateRandomNumber(
	{ max, min }: RandomNumberLimits,
	Math: Math
) {
	return Math.floor(Math.random() * max + min);
}
