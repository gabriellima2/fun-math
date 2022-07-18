import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

export function WithOptionSelected<P extends object>(
	Component: React.ComponentType<P>
) {
	return (props: P) => {
		const { userChoicesAreNotValid } = useContext(UserChoicesContext);
		const router = useRouter();

		useEffect(() => {
			if (userChoicesAreNotValid()) {
				router.push("/choose-options");
			}
		}, []);

		if (userChoicesAreNotValid()) return null;

		return <Component {...props} />;
	};
}
