import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import { ComponentType, P } from "../types";
import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";

export function WithOptionSelected<P extends object>(Component: ComponentType) {
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
