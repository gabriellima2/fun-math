import { BsFillGridFill, BsXLg } from "react-icons/bs";
import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface ButtonProps extends Pick<ButtonDefaultProps, "onClick"> {}

const Button = ({ className, ...props }: ButtonDefaultProps) => (
	<button {...props} className={`${className} text-xl text-pink-50`} />
);

export const OpenSidebarButton = ({ onClick }: ButtonProps) => (
	<Button
		title="Abrir Menu de Navegação"
		onClick={onClick}
		className="justify-self-end"
	>
		<BsFillGridFill />
	</Button>
);

export const CloseSidebarButton = ({ onClick }: ButtonProps) => (
	<button
		title="Fechar Menu de Navegação"
		onClick={onClick}
		className="absolute top-6 md:top-9 right-6 md:right-9"
	>
		<BsXLg />
	</button>
);
