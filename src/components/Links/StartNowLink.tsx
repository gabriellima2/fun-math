import { BsArrowRightShort } from "react-icons/bs";

import { BaseLink, BaseLinkProps } from "./BaseLink";
import { Icon } from "@components/Icon";

interface StartNowLinkProps extends Omit<BaseLinkProps, "href"> {}

export const StartNowLink = (props: StartNowLinkProps) => (
	<BaseLink.Background {...props} href="/configuracoes-exercicios">
		comece agora
		<Icon
			element={BsArrowRightShort}
			aria-label="Seta para direita"
			className="text-2xl md:text-3xl xl:text-4xl"
		/>
	</BaseLink.Background>
);
