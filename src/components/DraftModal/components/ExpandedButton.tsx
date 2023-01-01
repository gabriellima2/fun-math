import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

interface ExpandedButtonProps {
	isVisible: boolean;
	handleShow: () => void;
	handleHide: () => void;
}

export const ExpandedButton = ({
	isVisible,
	handleShow,
	handleHide,
}: ExpandedButtonProps) => {
	const Icon = isVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />;
	const handleClick = isVisible ? handleHide : handleShow;
	const action = isVisible ? "Mostrar" : "Esconder";

	return (
		<button
			type="button"
			title={`${action} área de rascunho`}
			onClick={handleClick}
			className="pb-2 md:pb-4 text-base md:text-xl absolute top-3 left-5"
		>
			{Icon}
		</button>
	);
};
