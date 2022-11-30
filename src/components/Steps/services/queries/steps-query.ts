import { gql } from "@apollo/client";

export const stepsQuery = gql`
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
