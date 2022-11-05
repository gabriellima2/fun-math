import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, ...props }: ContainerProps) => (
	<div className="flex-center--col">
		<div
			{...props}
			className={`${className} w-full 2xl:w-full 2xl:max-w-[1600px] px-4 py-12`}
		/>
	</div>
);
