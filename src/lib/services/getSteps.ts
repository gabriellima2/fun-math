import { stepsQuery } from "./queries/steps-query";
import { client } from "../client";

import type { Step } from "@domain/step";

interface StepsQuery {
	cards: Step[];
}

export async function getSteps() {
	try {
		const { data } = await client.query<StepsQuery>({ query: stepsQuery });
		return data.cards;
	} catch (err) {
		return null;
	}
}
