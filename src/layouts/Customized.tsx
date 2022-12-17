import { Header } from "@components/Header";
import type { WithChildren } from "@global-types/TGlobals";

export const Customized = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
	</>
);
