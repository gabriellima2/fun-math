import { BaseButton } from "@components/Buttons/BaseButton";
import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface ClearCanvasButtonProps
	extends Omit<
		ButtonDefaultProps,
		"type" | "title" | "className" | "children"
	> {}

export const ClearCanvasButton = (props: ClearCanvasButtonProps) => (
	<BaseButton
		{...props}
		type="button"
		title="Limpar rabiscos"
		className="rounded-md p-[10px] md:p-3 text-2xs md:text-xs uppercase tracking-wider"
	>
		Limpar
	</BaseButton>
);
