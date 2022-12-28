import { BsQuestionLg } from "react-icons/bs";
import { useTipSelect } from "@redux/modules/tip-module/hooks/useTipSelect";

const ButtonContent = () => (
	<>
		<i>
			<BsQuestionLg />
		</i>
		Dica
	</>
);

const Content = () => {
	const { message } = useTipSelect();

	return <h2>{message}</h2>;
};

export const Tip = {
	ButtonContent,
	Content,
};
