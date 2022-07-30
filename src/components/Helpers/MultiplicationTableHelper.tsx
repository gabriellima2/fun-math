import { useState, ChangeEvent } from "react";

import { Input } from "../Inputs";

interface MultiplicationTableProps {
	currentNumber: number;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MultiplicationTable = (props: MultiplicationTableProps) => (
	<ol className="w-full flex-center--col gap-1 mt-2">
		{values.map((value) => (
			<li key={value} className="font-main font-semibold text-md tracking-wide">
				{props.currentNumber} X {value} = {props.currentNumber * value}
			</li>
		))}
	</ol>
);

const ButtonText = () => <span>Quero ver a tabuada</span>;

const Content = () => {
	const [currentNumber, setCurrentNumber] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;

		if (Number(typedValue) > 100) return;

		setCurrentNumber(e.target.value);
	};

	return (
		<div className="flex-center--col gap-6 p-2">
			<header>
				<Input.Text
					type="number"
					id="number"
					name="number"
					value={currentNumber}
					onChange={handleChange}
				>
					<p className="relative">
						Número
						<span className="w-fit text-xs lg:text-sm opacity-50 absolute -bottom-4 left-0">
							(0 à 100)
						</span>
					</p>
				</Input.Text>
			</header>
			<main
				aria-live="polite"
				aria-atomic="true"
				className="w-full p-4 text-center rounded-md bg-black-200"
			>
				<h1 className="text-xl tracking-wide">
					{currentNumber
						? `Tabuada do ${currentNumber}:`
						: "Digite o número acima!"}
				</h1>
				{currentNumber && (
					<MultiplicationTable currentNumber={Number(currentNumber)} />
				)}
			</main>
		</div>
	);
};

export const MultiplicationTableHelper = { ButtonText, Content };
