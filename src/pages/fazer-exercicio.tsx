import { NextPage } from "next";
import React from "react";

import { OnlyExercisePreferencesFilled } from "../HOC/OnlyExercisePreferencesFilled";

const DoExercise: NextPage = () => {
	return <h1>Exercicio</h1>;
};

export default OnlyExercisePreferencesFilled(DoExercise);
