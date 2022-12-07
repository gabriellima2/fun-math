import { Modal } from "@components/Modal";

interface OptionProps {
	buttonText: string;
	Content: () => JSX.Element;
}

export const Option = ({ Content, buttonText }: OptionProps) => {
	return (
		<Modal triggerChildren={buttonText}>
			<Content />
		</Modal>
	);
};
