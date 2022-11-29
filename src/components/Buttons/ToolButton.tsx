import { useToolsContext } from "@contexts/ToolsContext";
import { Icon } from "@components/Icon";

import type { ITool } from "@interfaces/ITools";

interface ToolButtonProps extends Omit<ITool, "color" | "width"> {}

export const ToolButton = (props: ToolButtonProps) => {
	const { tool, changeCurrentTool } = useToolsContext();

	const isCurrentTool = props.name === tool.current.name;

	return (
		<button
			type="button"
			title={props.name}
			data-action={props.action}
			aria-pressed={isCurrentTool}
			onClick={() => changeCurrentTool(props.name)}
			className={`${
				isCurrentTool && "bg-main/40 rounded-md text-white/40 transition-all"
			} p-2`}
		>
			<Icon element={props.icon} />
		</button>
	);
};
