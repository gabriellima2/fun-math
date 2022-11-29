import { gql } from "@apollo/client";

import { client } from "src/lib/client";
import type { StepModel } from "@models/step-model";

interface StepsQuery {
	cards: StepModel[];
}

const query = gql`
	query GetSteps {
		cards {
			title
			description
			icon {
				url
			}
		}
	}
`;

export async function getSteps() {
	try {
		const { data } = await client.query<StepsQuery>({
			query,
		});
		return data.cards;
	} catch (err) {
		return null;
	}
}
