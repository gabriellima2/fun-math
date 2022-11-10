import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import type { WithChildren } from "@types/TGlobals";

export const Common = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
