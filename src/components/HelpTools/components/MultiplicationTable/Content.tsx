import { useState } from "react";

import { Multiplication } from "./Multiplication";
import { Input } from "@components/Inputs";

export const Content = () => {
	const [multiplicand, setMultiplicand] = useState("");

	const handleMultiplicandChange = (value: string) => {
		if (Number(value) > 100) return;

		setMultiplicand(value);
	};

	return (
		<section className="md:w-[300px]">
			<div className="flex flex-col gap-2">
				<Input.Text
					type="number"
					onChange={(e) => handleMultiplicandChange(e.target.value)}
					label="Número"
					value={multiplicand}
					placeholder="Digite aqui o número..."
				/>
			</div>

			<section className="mt-3 md:mt-6">
				{multiplicand && (
					<ul className="flex items-center flex-col p-2 md:p-4 rounded bg-utils-secondary">
						{[...Array(11)].map((_, multiplier) => (
							<Multiplication
								key={multiplier}
								multiplier={multiplier}
								multiplicand={Number(multiplicand)}
							/>
						))}
					</ul>
				)}
			</section>
		</section>
	);
};
