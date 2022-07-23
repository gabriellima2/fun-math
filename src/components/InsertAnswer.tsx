interface InsertAnswerProps {
	value: string;
	changeValue: (newValue: string) => void;
}

export const InsertAnswer = (props: InsertAnswerProps) => {
	return (
		<>
			<label htmlFor="" className="font-util text-base md:text-lg">
				<span className="font-semibold mr-1">R:</span>O resultado é{" "}
			</label>
			<input
				type="number"
				value={props.value}
				onChange={(e) => props.changeValue(e.target.value)}
				placeholder="Digite aqui..."
				className="h-10 p-1 px-2 ml-2 font-util text-sm md:text-base font-medium tracking-wide rounded-lg bg-transparent border-2 border-white/30 transition-all outline-custom--focus focus:border-transparent"
			/>
		</>
	);
};
