import Image from "next/image";

import { Radio } from "@components/Radio";
import type { IOperator } from "@interfaces/ioperator";

interface OperatorProps
	extends Pick<IOperator, "image" | "displayText" | "id"> {}

export const Operator = (props: OperatorProps) => (
	<Radio.Option value={props.id} className="justify-center sm:justify-start">
		<div className="w-7 sm:w-10 h-7 sm:h-10 relative">
			<Image
				src={props.image}
				alt={`Operator de ${props.displayText}`}
				layout="fill"
				objectFit="contain"
			/>
		</div>
		<p className="hidden sm:inline-block">{props.displayText}</p>
	</Radio.Option>
);
