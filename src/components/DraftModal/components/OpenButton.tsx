import { BsPencilFill } from "react-icons/bs";

interface OpenButtonProps {
	handleClick: () => void;
}

export const OpenButton = ({ handleClick }: OpenButtonProps) => (
	<button
		title="Abrir área de rascunho"
		onClick={handleClick}
		className="absolute right-0 top-[20%] z-50 bg-gradient-to-b from-accents-primary to-accents-secondary p-1 rounded-tl-full rounded-bl-full"
	>
		<span className="block rounded-full p-3 md:p-5 bg-main/60">
			<i className="text-lg md:text-2xl text-font">
				<BsPencilFill />
			</i>
		</span>
	</button>
);
