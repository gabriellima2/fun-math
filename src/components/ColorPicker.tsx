import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

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
				className="w-[30px] h-[33px] appearance-none border-none bg-transparent cursor-pointer"
			/>
			<label htmlFor="colorPicker">
				<span className="hidden">Selecione a cor</span>
				<i aria-label="Icone de seta">
					<BsCaretDownFill />
				</i>
			</label>
		</div>
	);
};
