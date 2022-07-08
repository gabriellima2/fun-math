import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MainButtonProps {
	text: string;
	icon: IconType;
	href: string;
	isDisabled: boolean;
}

export const MainButton = (props: MainButtonProps) => (
	<Link href={props.isDisabled ? "" : props.href}>
		<a
			href={props.isDisabled ? "" : props.href}
			tabIndex={props.isDisabled ? -1 : 0}
			aria-disabled={props.isDisabled}
			className={`${
				props.isDisabled && "pointer-events-none opacity-40"
			} w-fit main-button capitalize font-semibold text-base md:text-lg md:px-6 mb-36 lg:mb-36 transition-hover hover:brightness-75`}
		>
			{props.text}{" "}
			<i className="text-xl md:text-2xl ml-2">
				{React.createElement(props.icon, null)}
			</i>
		</a>
	</Link>
);

const defaultProps: Pick<MainButtonProps, "isDisabled"> = {
	isDisabled: false,
};

MainButton.defaultProps = defaultProps;
