import type { InputDefaultProps } from "@global-types/IDefaultProps";

interface ColorPickerProps
	extends Omit<InputDefaultProps, "type" | "name" | "id"> {}

export const ColorPicker = (props: ColorPickerProps) => (
	<div className="w-fit flex-center--col">
		<label>
			<input
				{...props}
				type="color"
				name="color"
				id="colorPicker"
				className="w-7 h-8 sm:w-8 sm:h-9 appearance-none border-none bg-transparent cursor-pointer"
			/>
		</label>
	</div>
);
