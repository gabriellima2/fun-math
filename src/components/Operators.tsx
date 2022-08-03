import Image from "next/image";
import React from "react";

import { Radio, GroupProps, OptionProps } from "./Radio";

import { ClassName } from "../types";
import { operators } from "../constants";

type ContainerProps = Omit<GroupProps, "label">;

interface ListProps {
	className?: ClassName;
	showOperatorName: boolean;
	sizeImage: ClassName;
}

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

const List = React.memo((props: ListProps) => (
	<>
		{operators.data.map((operator) => (
			<Radio.Option
				value={operator.id}
				key={operator.id}
				className={props.className}
			>
				<>
					<div className={`${props.sizeImage} relative`}>
						<Image
							src={operator.image}
							alt={`Operador de ${operator.name}`}
							layout="fill"
						/>
					</div>
					{props.showOperatorName && (
						<span className="hidden options__text sm:inline">
							{operator.name}
						</span>
					)}
				</>
			</Radio.Option>
		))}
	</>
));

export const Operators = { Container, List };
