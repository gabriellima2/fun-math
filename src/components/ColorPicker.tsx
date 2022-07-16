interface ColorPickerProps {
	color: string;
	changeColor: (color: string) => void;
}

export const ColorPicker = (props: ColorPickerProps) => {
	return (
		<div className="w-fit flex-center--col">
			<label htmlFor="colorPicker" className="hidden">
				Selecione a cor
			</label>
			<input
				type="color"
				name="color"
				id="colorPicker"
				value={props.color}
				onChange={(e) => props.changeColor(e.target.value)}
				className="w-8 h-9 appearance-none border-none bg-transparent cursor-pointer"
			/>
		</div>
	);
};
