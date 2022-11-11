import { Header } from "@components/Header";
import type { WithChildren } from "@globalTypes/TGlobals";

export const Customized = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
	</>
);
