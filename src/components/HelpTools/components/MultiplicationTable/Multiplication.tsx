interface MultiplicationProps {
	multiplier: number;
	multiplicand: number;
}

export const Multiplication = ({
	multiplier,
	multiplicand,
}: MultiplicationProps) => {
	if (multiplier === 0) return null;

	const product = multiplicand * multiplier;

	return (
		<ol className="font-medium text-sm md:text-base">
			{multiplicand} X {multiplier} = {product}
		</ol>
	);
};
