import { exercises } from "../constants";

export function getExerciseData(exerciseID: string) {
	const [exercise] = exercises.data.filter(
		(exercise) => exercise.id === exerciseID
	);

	return exercise;
}
