import { BsCaretDownFill } from "react-icons/bs";

import { Icon } from "./Icon";

interface ColorPickerProps {
	color: string;
	changeColor: (color: string) => void;
}

export const ColorPicker = (props: ColorPickerProps) => {
	return (
		<div className="w-fit flex-center--col">
			<input
				type="color"
				name="color"
				id="colorPicker"
				value={props.color}
				onChange={(e) => props.changeColor(e.target.value)}
				className="w-8 h-9 appearance-none border-none bg-transparent cursor-pointer"
			/>
			<label htmlFor="colorPicker">
				<span className="hidden">Selecione a cor</span>
				<Icon
					label="Icone de seta"
					element={BsCaretDownFill}
					className="text-base"
				/>
			</label>
		</div>
	);
};
