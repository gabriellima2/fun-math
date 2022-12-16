interface NumberLimits {
	max: number;
	min: number;
}

export function generateRandomNumber({ max, min }: NumberLimits) {
	return Math.floor(Math.random() * max + min);
}
