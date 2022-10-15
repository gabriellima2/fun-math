import Image from "next/image";
import React from "react";

import { Radio, GroupProps } from "./Infra/Accessibility/Radio";

import type { ClassName, OperatorType } from "@globalTypes";
import { operators } from "../mocks";

type ContainerProps = Omit<GroupProps, "label">;

interface ItemProps {
	operator: OperatorType;
	className?: ClassName;
	showOperatorName: boolean;
	imageSize: ClassName;
}

interface ListProps extends Omit<ItemProps, "operator"> {}

const Container = (props: ContainerProps) => (
	<Radio.Group
		label="Lista de operadores"
		handleChange={props.handleChange}
		currentActiveOption={props.currentActiveOption}
		className={props.className}
	>
		{props.children}
	</Radio.Group>
);

const Item = ({ operator, ...props }: ItemProps) => (
	<Radio.Option value={operator.id} className={props.className}>
		<>
			<div className={`${props.imageSize} relative`}>
				<Image
					src={operator.image}
					alt={`Operador de ${operator.name}`}
					layout="fill"
				/>
			</div>
			{props.showOperatorName && (
				<span className="hidden options__text sm:inline">{operator.name}</span>
			)}
		</>
	</Radio.Option>
);

const List = React.memo((props: ListProps) => {
	return (
		<>
			{operators.data.map((operator) => (
				<Item operator={operator} {...props} key={operator.id} />
			))}
		</>
	);
});

export const Operators = { Container, List };
