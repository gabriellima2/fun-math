import { useState } from "react";

export function useToggle() {
	const [isActive, setIsActive] = useState(false);

	const toggle = () => setIsActive((prevState) => !prevState);

	return {
		isActive,
		toggle,
	};
}
