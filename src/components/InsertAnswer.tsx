interface InsertAnswerProps {
	value: string;
	changeValue: (newValue: string) => void;
}

export const InsertAnswer = (props: InsertAnswerProps) => {
	return (
		<>
			<label htmlFor="" className="font-util text-sm md:text-base">
				<span className="font-semibold mr-1">R:</span>O resultado é{" "}
			</label>
			<input
				type="number"
				value={props.value}
				onChange={(e) => props.changeValue(e.target.value)}
				className="w-16 h-7 p-1 px-2 ml-2 font-util text-sm font-medium tracking-wide rounded-lg bg-white/20 transition-all outline-custom--focus focus:bg-transparent"
			/>
		</>
	);
};
