import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { ValidateExercisePreferencesFromURL } from "../HOC/ValidateExercisePreferencesFromURL";

const DoExercise: NextPage = () => {
	const router = useRouter();

	return <h1>Exercicio</h1>;
};

export default ValidateExercisePreferencesFromURL(DoExercise);
