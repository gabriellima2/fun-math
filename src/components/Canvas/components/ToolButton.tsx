import { IUseTools } from "../hooks/useTools";

import { Icon } from "@components/Icon";
import type { ITool } from "@interfaces/itool";

interface ToolButtonProps
	extends Omit<ITool, "color" | "width">,
		Pick<IUseTools, "tool" | "changeCurrentTool"> {}

export const ToolButton = ({ tool, ...props }: ToolButtonProps) => {
	const isCurrentTool = props.name === tool.current.name;

	return (
		<button
			type="button"
			title={props.name}
			data-action={props.action}
			aria-pressed={isCurrentTool}
			onClick={() => props.changeCurrentTool(props.name)}
			className={`${
				isCurrentTool && "bg-main rounded-md text-white/30 transition-all"
			} p-2`}
		>
			<Icon element={props.icon} />
		</button>
	);
};
