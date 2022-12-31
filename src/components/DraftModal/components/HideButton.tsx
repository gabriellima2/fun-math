interface HideButtonProps {
	handleHide: () => void;
	handleShow: () => void;
}

export const HideButton = ({ handleHide, handleShow }: HideButtonProps) => {
	return (
		<button
			title="Ver texto do exercício"
			onPointerDown={handleHide}
			onPointerUp={handleShow}
			onTouchStart={handleHide}
			onTouchEnd={handleShow}
			className="pb-2 md:pb-4 text-sm md:text-base"
		>
			Ver Texto (Clique e segure)
		</button>
	);
};
