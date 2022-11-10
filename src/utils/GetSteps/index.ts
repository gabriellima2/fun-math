import { gql } from "@apollo/client";

import { client } from "src/lib/client";
import type { IStepData } from "@interfaces/IStepData";

interface StepsQuery {
	cards: IStepData[];
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
