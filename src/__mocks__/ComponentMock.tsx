interface ComponentMockProps {
	text: string;
}

export const ComponentMock = ({ text }: ComponentMockProps) => <h1>{text}</h1>;
