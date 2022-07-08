import { BsArrowUpShort } from "react-icons/bs";

export const GoToTopButton = () => {
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<button
			onClick={scrollToTop}
			className="bg-black-500 p-1 text-2xl rounded-md transition-hover hover:text-accents-pink-100 hover:bg-transparent"
		>
			<BsArrowUpShort />
		</button>
	);
};
