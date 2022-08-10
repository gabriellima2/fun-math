import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";

import { ClassName } from "../types";

interface StatusProps {
	type: "success" | "error";
	className?: ClassName;
}

const Success = () => (
	<i
		aria-labelledby="status"
		aria-label="Resposta Certa"
		className="text-green-600"
	>
		<BsFillCheckSquareFill />
	</i>
);

const Error = () => (
	<i
		aria-labelledby="status"
		aria-label="Resposta Errada"
		className="text-red-600"
	>
		<BsFillXSquareFill />
	</i>
);

export const Status = (props: StatusProps) => (
	<div id="status" role="status" className={`${props.className} text-3xl`}>
		{props.type == "success" ? <Success /> : <Error />}
	</div>
);
