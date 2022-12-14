import { useModalContext } from "@contexts/ModalContext";

interface OptionProps {
	ButtonContent: () => JSX.Element;
	Content: () => JSX.Element;
}

export const Option = ({ Content, ButtonContent }: OptionProps) => {
	const { handleOpen } = useModalContext();

	return (
		<button
			onClick={() => handleOpen(Content)}
			className="flex gap-4 items-center text-sm rounded px-4 md:px-3 p-2 transition hover:bg-white/5"
		>
			<ButtonContent />
		</button>
	);
};
