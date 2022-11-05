import { WithChildren } from "../types";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export const Common = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
