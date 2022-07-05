import { WithChildren } from "../types";

import { Header } from "../components/Infra";

export const Customized = ({ children }: WithChildren) => (
	<>
		<Header />
		{children}
	</>
);
