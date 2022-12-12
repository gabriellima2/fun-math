import { useModalContext } from "@contexts/ModalContext";

interface OptionProps {
	ButtonContent: () => JSX.Element;
	Content: () => JSX.Element;
}

export const Option = ({ Content, ButtonContent }: OptionProps) => {
	const { handleOpen } = useModalContext();

	return (
		<button onClick={() => handleOpen(Content)}>
			<ButtonContent />
		</button>
	);
};
