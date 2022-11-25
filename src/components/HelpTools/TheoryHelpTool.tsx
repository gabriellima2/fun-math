import { gql } from "@apollo/client";

interface OperatorInformation {
	aboutOperator: {
		title: string;
		description: string;
	};
}

const GET_OPERATOR_INFORMATION = gql`
	query GetOperatorInformation($name: String!) {
		aboutOperator(where: { name: $name }) {
			title
			description
		}
	}
`;

const Content = () => {
	return (
		<section>
			<header>Sobre</header>
			<section></section>
		</section>
	);
};

export const TheoryHelpTool = { buttonText: "Sobre os operadores", Content };
