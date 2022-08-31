import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import { Icon } from "../Icon";

interface BackButtonProps {
	href: string;
}

export const BackButton = ({ href, ...props }: BackButtonProps) => (
	<Link href={href} title="Voltar">
		<a className="flex-center--row text-sm lg:text-base text-white/80 uppercase font-medium transition-colors hover:text-accents-pink-100">
			<Icon
				label="Icone de seta para esquerda, indica voltar para a rota anterior"
				element={BsArrowLeftShort}
				className="text-3xl lg:text-4xl"
			/>
			<span className="hidden sm:block">Voltar</span>
		</a>
	</Link>
);
