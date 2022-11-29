interface NumberLimits {
	max: number;
	min: number;
}

export function generateRandomNumber({ max, min }: NumberLimits, Math: Math) {
	return Math.floor(Math.random() * max + min);
}
