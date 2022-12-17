import { stepsQuery } from "./queries/steps-query";
import { client } from "../client";

import type { IStep } from "@interfaces/istep";

interface StepsQuery {
	cards: IStep[];
}

export async function getSteps() {
	try {
		const { data } = await client.query<StepsQuery>({ query: stepsQuery });
		return data.cards;
	} catch (err) {
		return null;
	}
}
