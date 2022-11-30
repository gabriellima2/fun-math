import type { StepModel } from "@models/step-model";
import { stepsQuery } from "./queries/steps-query";
import { client } from "src/lib/client";

interface StepsQuery {
	cards: StepModel[];
}

export async function getSteps() {
	try {
		const { data } = await client.query<StepsQuery>({ query: stepsQuery });
		return data.cards;
	} catch (err) {
		return null;
	}
}
