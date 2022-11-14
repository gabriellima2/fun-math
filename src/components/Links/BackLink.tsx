import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import type { Url } from "url";

import { Icon } from "../Icon";

interface BackLinkProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	href: Url | string;
}

export const BackLink = ({ href, ...props }: BackLinkProps) => (
	<Link href={href} title="Voltar" aria-label="Voltar" {...props}>
		<a className="flex-center--row text-sm lg:text-base text-white/80 uppercase font-medium transition hover:brightness-50">
			<Icon
				aria-label="Icone de seta para a esquerda"
				element={BsArrowLeftShort}
				className="text-2xl lg:text-3xl"
			/>
		</a>
	</Link>
);
