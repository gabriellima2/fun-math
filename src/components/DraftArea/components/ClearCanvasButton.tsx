import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface ClearCanvasButtonProps
	extends Omit<
		ButtonDefaultProps,
		"type" | "title" | "className" | "children"
	> {}

export const ClearCanvasButton = (props: ClearCanvasButtonProps) => (
	<button
		{...props}
		type="button"
		title="Limpar rabiscos"
		className="p-2 sm:p-3 rounded-md text-xs sm:text-sm bg-accents-primary transition hover:opacity-70"
	>
		Limpar
	</button>
);
