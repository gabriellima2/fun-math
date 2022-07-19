import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";

export function WithOptionSelected<P extends object>(
	Component: React.ComponentType<P>
) {
	return (props: P) => {
		const { userSelectedOptionsAreNotValid } = useContext(
			UserSelectedOptionsContext
		);
		const router = useRouter();

		useEffect(() => {
			if (userSelectedOptionsAreNotValid()) {
				router.push("/choose-options");
			}
		}, []);

		if (userSelectedOptionsAreNotValid()) return null;

		return <Component {...props} />;
	};
}
