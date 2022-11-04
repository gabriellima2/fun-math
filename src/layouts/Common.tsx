import { WithChildren } from "../types";

import { Header, Footer } from "@components/Infra";

export const Common = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
