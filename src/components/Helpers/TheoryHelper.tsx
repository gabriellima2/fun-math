import { useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { Loading, Error } from "../Infra";
import { Operators } from "../Operators";
import { useLazyFetch } from "../../hooks/useFetch";

interface OperatorInformation {
	aboutOperator: {
		title: string;
		description: string;
	};
}

interface OperatorInformationVars {
	name: string;
}

interface AboutOperatorProps {
	data: Pick<OperatorInformation, "aboutOperator"> | undefined;
}

const GET_OPERATOR_INFORMATION = gql`
	query GetOperatorInformation($name: String!) {
		aboutOperator(where: { name: $name }) {
			title
			description
		}
	}
`;

const AboutOperator = ({ data }: AboutOperatorProps) => (
	<>
		<h1 className="text-center text-xl md:text-2xl mb-2">
			{data?.aboutOperator.title}
		</h1>
		<p className="text-sm md:text-base">{data?.aboutOperator.description}</p>
	</>
);

const ButtonText = () => <>Sobre os operadores</>;

const Content = () => {
	const [currentOperatorName, setCurrentOperatorName] = useState("addition");
	const [getOperatorInformation, { loading, error, data }] = useLazyFetch<
		OperatorInformation,
		OperatorInformationVars
	>(GET_OPERATOR_INFORMATION, {
		variables: { name: currentOperatorName },
	});

	const changeCurrentOperator = (operator: string) =>
		setCurrentOperatorName(operator);

	useEffect(() => {
		const getData = async () => await getOperatorInformation();

		getData();
	}, [currentOperatorName]);

	if (error) return <Error message="Ocorreu um erro, tente novamente!" />;

	return (
		<>
			<section>
				<Operators.Container
					handleChange={changeCurrentOperator}
					currentActiveOption={currentOperatorName}
					className="flex gap-2 overflow-x-scroll p-2 md:p-3 pb-3 md:pb-4 rounded-md bg-black-600/90"
				>
					<Operators.List
						showOperatorName={false}
						className="w-fit"
						imageSize="w-5 md:w-6 h-5 md:h-6"
					/>
				</Operators.Container>
			</section>
			<section className="p-2 pt-3 md:pt-4">
				{loading ? <Loading /> : <AboutOperator data={data} />}
			</section>
		</>
	);
};

export const TheoryHelper = { ButtonText, Content };
