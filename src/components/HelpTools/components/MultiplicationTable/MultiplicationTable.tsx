import { useState } from "react";
import { BsTable } from "react-icons/bs";

import { Multiplication } from "./Multiplication";
import { Input } from "@components/Inputs";

const ButtonContent = () => (
	<>
		<i>
			<BsTable />
		</i>
		Tabuada
	</>
);

const Content = () => {
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
					className="border-none"
				/>
			</div>

			<section
				aria-live="polite"
				aria-atomic="true"
				className="mt-3 md:mt-6"
				data-testid="numbers-section"
			>
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

export const MultiplicationTable = {
	Content,
	ButtonContent,
};
