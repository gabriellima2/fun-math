import { Icon } from "@components/Icon";
import { BsArrowRightShort } from "react-icons/bs";

import { BaseButton } from "./BaseButton";

import type { ButtonDefaultProps } from "@interfaces/IDefaultProps";

interface PlayButtonProps
	extends Omit<ButtonDefaultProps, "type" | "className"> {}

export const PlayButton = (props: PlayButtonProps) => {
	return (
		<BaseButton
			{...props}
			type="submit"
			className="rounded-tl-lg md:rounded-tl-lg rounded-br-lg md:rounded-br-lg rounded-lg py-1 md:py-1 px-1 md:px-1 xl:px-1"
		>
			<Icon element={BsArrowRightShort} className="text-2xl lg:text-3xl" />
		</BaseButton>
	);
};
