import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import type { ComponentType } from "@globalTypes";
import { UserSelectedOptionsContext } from "@contexts/ExercisePreferences";

export function WithOptionSelected<P extends object>(
	Component: ComponentType<P> | NextPage<P>
) {
	return function HighOrder(props: P) {
		const { userSelectedOptionsAreNotValid } = useContext(
			UserSelectedOptionsContext
		);
		const router = useRouter();

		// Redireciona o usuário para rota de escolha de opções, caso não seja válidos as opções.
		useEffect(() => {
			if (userSelectedOptionsAreNotValid()) {
				router.push("/choose-options");
			}
		}, []);

		if (userSelectedOptionsAreNotValid()) return null;

		return <Component {...props} />;
	};
}
