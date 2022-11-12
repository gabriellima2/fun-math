import { HTMLAttributes } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

import { Icon } from "./Icon";

interface WarningProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Warning = (props: WarningProps) => (
	<h2
		{...props}
		role="alert"
		className={`${props.className} text-sm sm:text-base font-semibold flex-center--row gap-3`}
	>
		<Icon
			aria-label="Icone de aviso"
			element={BsFillExclamationCircleFill}
			className="text-base sm:text-lg"
		/>
		{props.children}
	</h2>
);
