import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";

import { Icon } from "../Icon";

interface BackButtonProps {
	specificRoute?: string;
}

export const BackButton = ({ specificRoute, ...props }: BackButtonProps) => {
	const route = useRouter();

	return (
		<button
			title="Voltar"
			onClick={
				specificRoute ? () => route.push(specificRoute) : () => route.back()
			}
			className="flex-center--row text-sm lg:text-base text-white/80 uppercase font-medium transition-colors hover:text-accents-pink-100"
		>
			<Icon
				label="Icone de seta para esquerda, indica voltar para a rota anterior"
				element={BsArrowLeftShort}
				className="text-3xl lg:text-4xl"
			/>

			<span className="hidden sm:block">Voltar</span>
		</button>
	);
};
