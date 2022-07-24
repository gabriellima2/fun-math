import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Button = () => <span>Quero ver a tabuada</span>;

const Content = () => {
	const [currentNumber, setCurrentNumber] = useState("");

	return (
		<div className="flex-center--col gap-4 p-2">
			<header>
				<label>
					<input
						type="number"
						onChange={(e) => setCurrentNumber(e.target.value)}
						value={currentNumber}
						placeholder="Digite o número"
						className="h-10 p-1 px-2 font-util text-sm md:text-base font-medium tracking-wide rounded-lg bg-transparent border-2 border-white/30 transition-all outline-custom--focus focus:border-transparent"
					/>
				</label>
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
					<ol className="w-full flex-center--col gap-1 mt-2">
						{numbers.map((value) => (
							<li className="font-main font-semibold text-md tracking-wide">
								{currentNumber} X {value} = {Number(currentNumber) * value}
							</li>
						))}
					</ol>
				)}
			</main>
		</div>
	);
};

export const MultiplicationTableHelper = { Button, Content };
