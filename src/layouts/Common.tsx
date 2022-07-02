import { WithChildren } from "../types";

import { Header } from "../components/Header";

export const Common = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
		<footer></footer>
	</>
);
