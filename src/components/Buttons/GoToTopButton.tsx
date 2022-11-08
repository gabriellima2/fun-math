import { BsArrowUpShort } from "react-icons/bs";

export const GoToTopButton = () => {
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<button
			type="button"
			title="Ir para o topo"
			onClick={scrollToTop}
			className="p-1 md:p-2 text-2xl rounded-md bg-utils-secondary border-2 border-transparent transition focus:bg-transparent focus:border-utils-secondary hover:bg-transparent hover:border-utils-secondary"
		>
			<BsArrowUpShort />
		</button>
	);
};
