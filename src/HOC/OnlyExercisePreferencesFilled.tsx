import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import { ExercisePreferences } from "@contexts/ExercisePreferences";
import { Loading } from "@components/Loading";

import type { Component } from "@globalTypes/TGlobals";

export function OnlyExercisePreferencesFilled<P extends object>(
	Component: Component<P>
) {
	return function HOC(props: P) {
		const { userPreferencesIsValid } = useContext(ExercisePreferences);
		const router = useRouter();

		// Verifica se as preferências são válidas e estão preenchidas.
		useEffect(() => {
			if (userPreferencesIsValid()) return;

			router.push("/configuracoes-exercicios");
		}, []);

		if (!userPreferencesIsValid()) return <Loading.FullScreen />;

		return <Component {...props} />;
	};
}
