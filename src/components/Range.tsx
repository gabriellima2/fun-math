import type { InputDefaultProps } from "@global-types/IDefaultProps";

interface RangeProps
	extends Omit<InputDefaultProps, "onChange" | "type" | "step" | "className"> {
	onChange: (param: number) => void;
}

export const Range = (props: RangeProps) => (
	<div>
		<label>
			<input
				{...props}
				type="range"
				onChange={(e) => props.onChange(Number(e.target.value))}
				step="1"
			/>
		</label>
	</div>
);
