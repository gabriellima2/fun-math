interface RangeProps {
	id: string;
	name: string;
	label: string;
	value: string;
	min: string;
	max: string;
	changeValue: (param: number) => void;
}

export const Range = (props: RangeProps) => (
	<>
		<label htmlFor={props.id} className="hidden">
			{props.label}
		</label>
		<input
			type="range"
			value={props.value}
			onChange={(e) => props.changeValue(Number(e.target.value))}
			min={props.min}
			max={props.max}
			step="1"
			name={props.name}
			id={props.id}
			className="appearance-none w-24 md:w-auto"
		/>
	</>
);

const defaultProps: Pick<RangeProps, "max" | "min"> = {
	min: "1",
	max: "20",
};

Range.defaultProps = defaultProps;
