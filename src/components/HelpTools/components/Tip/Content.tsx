import { useTipSelect } from "@redux/modules/tip-module/hooks/useTipSelect";

export const Content = () => {
	const { message } = useTipSelect();

	return <h2>{message}</h2>;
};
