import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";

export const BackButton = () => {
	const route = useRouter();

	return (
		<button
			onClick={() => route.back()}
			className="flex-center--row text-sm lg:text-lg uppercase font-medium transition-colors hover:text-accents-pink"
		>
			<i className="text-3xl lg:text-4xl">
				<BsArrowLeftShort />
			</i>
			Voltar
		</button>
	);
};
